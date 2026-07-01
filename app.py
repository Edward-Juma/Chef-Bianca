"""
Chef Alessandro — Booking Form Backend
========================================
A small Flask API that receives booking requests from the website's
booking form, validates them, stores them, and emails a notification
to the chef (and optionally a confirmation to the client).

Designed to be deployed on Render.com as a Web Service.
"""

import os
import re
import sqlite3
import smtplib
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# -----------------------------------------------------------------
# CORS — allow your front-end domain to call this API.
# Replace "*" with your actual site URL once deployed, e.g.
# CORS(app, resources={r"/api/*": {"origins": "https://chefalessandro.com"}})
# -----------------------------------------------------------------
CORS(app, resources={r"/api/*": {"origins": "*"}})

DB_PATH = os.environ.get("DB_PATH", "bookings.db")

# -----------------------------------------------------------------
# Email configuration — set these as Environment Variables on Render,
# never hard-code real credentials in this file.
# -----------------------------------------------------------------
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")          # e.g. yourbookings@gmail.com
SMTP_PASS = os.environ.get("SMTP_PASS", "")          # app password, not your real password
CHEF_EMAIL = os.environ.get("CHEF_EMAIL", SMTP_USER)  # where booking alerts go
SEND_EMAILS = os.environ.get("SEND_EMAILS", "true").lower() == "true"

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


# -----------------------------------------------------------------
# Database setup
# -----------------------------------------------------------------
def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            guests INTEGER,
            event_date TEXT,
            event_time TEXT,
            occasion TEXT,
            budget TEXT,
            location TEXT,
            notes TEXT,
            created_at TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


init_db()


# -----------------------------------------------------------------
# Validation helpers
# -----------------------------------------------------------------
def validate_booking(data):
    errors = []

    full_name = (data.get("fullName") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    guests = data.get("guests")

    if not full_name or len(full_name) < 2:
        errors.append("Please provide your full name.")

    if not email or not EMAIL_RE.match(email):
        errors.append("Please provide a valid email address.")

    if guests:
        try:
            guests_int = int(guests)
            if guests_int < 1 or guests_int > 500:
                errors.append("Number of guests must be between 1 and 500.")
        except (ValueError, TypeError):
            errors.append("Number of guests must be a number.")

    return errors


# -----------------------------------------------------------------
# Email sending
# -----------------------------------------------------------------
def send_email(to_address, subject, body):
    if not SEND_EMAILS:
        print(f"[SEND_EMAILS disabled] Would send to {to_address}: {subject}")
        return True

    if not SMTP_USER or not SMTP_PASS:
        print("SMTP credentials not configured — skipping email send.")
        return False

    try:
        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = to_address
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, to_address, msg.as_string())
        return True
    except Exception as e:
        print(f"Email send failed: {e}")
        return False


def build_chef_notification(data):
    return f"""New Private Dining Booking Request

Name: {data.get('fullName')}
Email: {data.get('email')}
Phone: {data.get('phone', 'Not provided')}
Guests: {data.get('guests', 'Not specified')}
Date: {data.get('date', 'Not specified')}
Time: {data.get('time', 'Not specified')}
Occasion: {data.get('occasion', 'Not specified')}
Budget: {data.get('budget', 'Not specified')}
Location: {data.get('location', 'Not specified')}

Notes:
{data.get('notes', 'None')}

Submitted: {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}
"""


def build_client_confirmation(data):
    return f"""Dear {data.get('fullName')},

Thank you for your booking request with Chef Alessandro!

We have received your details and will be in touch within 24 hours
to confirm your private dining experience.

Here's a summary of what you submitted:

Occasion: {data.get('occasion', 'Not specified')}
Date: {data.get('date', 'Not specified')}
Time: {data.get('time', 'Not specified')}
Guests: {data.get('guests', 'Not specified')}
Location: {data.get('location', 'Not specified')}

If anything above needs adjusting, simply reply to this email.

Warm regards,
Chef Alessandro
"""


# -----------------------------------------------------------------
# Routes
# -----------------------------------------------------------------
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "time": datetime.utcnow().isoformat()})


@app.route("/api/booking", methods=["POST"])
def create_booking():
    data = request.get_json(silent=True)
    if data is None:
        return jsonify({"success": False, "errors": ["Invalid or missing JSON body."]}), 400

    errors = validate_booking(data)
    if errors:
        return jsonify({"success": False, "errors": errors}), 400

    full_name = data.get("fullName", "").strip()
    email = data.get("email", "").strip()
    phone = data.get("phone", "").strip()
    guests = data.get("guests")
    event_date = data.get("date", "").strip()
    event_time = data.get("time", "").strip()
    occasion = data.get("occasion", "").strip()
    budget = data.get("budget", "").strip()
    location = data.get("location", "").strip()
    notes = data.get("notes", "").strip()

    conn = sqlite3.connect(DB_PATH)
    cur = conn.execute(
        """INSERT INTO bookings
           (full_name, email, phone, guests, event_date, event_time,
            occasion, budget, location, notes, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            full_name, email, phone,
            int(guests) if guests else None,
            event_date, event_time, occasion, budget, location, notes,
            datetime.utcnow().isoformat(),
        ),
    )
    conn.commit()
    booking_id = cur.lastrowid
    conn.close()

    # Notify the chef
    send_email(
        CHEF_EMAIL,
        f"New Booking Request — {full_name}",
        build_chef_notification(data),
    )
    # Confirm to the client
    send_email(
        email,
        "Your Booking Request — Chef Alessandro",
        build_client_confirmation(data),
    )

    return jsonify({
        "success": True,
        "message": "Booking request received! We'll be in touch within 24 hours.",
        "bookingId": booking_id,
    }), 201


@app.route("/api/bookings", methods=["GET"])
def list_bookings():
    """
    Simple admin endpoint to view bookings.
    Protect this in production with an API key or auth before going live!
    """
    admin_key = request.headers.get("X-Admin-Key")
    expected_key = os.environ.get("ADMIN_KEY")
    if expected_key and admin_key != expected_key:
        return jsonify({"success": False, "error": "Unauthorized"}), 401

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute("SELECT * FROM bookings ORDER BY created_at DESC").fetchall()
    conn.close()

    return jsonify({"success": True, "bookings": [dict(r) for r in rows]})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
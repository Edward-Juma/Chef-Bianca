
/* =============================================
   DATA
   ============================================= */
const dishes = [
  { id:1, name:"Truffle Risotto Nero", cuisine:"Italian", desc:"Hand-rolled Arborio rice with black truffle shavings, aged Parmigiano, and a kiss of white wine.", img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80", ingredients:"Arborio rice, black truffle, Parmigiano Reggiano, white wine, bone broth", method:"Slow-stirred risotto technique", time:"35 min", diff:"Advanced" },
  { id:2, name:"Branzino en Papillote", cuisine:"Mediterranean", desc:"Wild sea bass with lemon confit, capers, and fresh herbs sealed and baked to perfection.", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80", ingredients:"Sea bass, lemon, capers, dill, fennel, olive oil", method:"En papillote, 200°C oven", time:"28 min", diff:"Intermediate" },
  { id:3, name:"Soufflé au Chocolat", cuisine:"French", desc:"A gravity-defying dark chocolate soufflé with a molten centre, served with vanilla crème anglaise.", img:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80", ingredients:"Valrhona 70% chocolate, eggs, sugar, butter, cream", method:"Bain-marie & high-heat baking", time:"40 min", diff:"Expert" },
  { id:4, name:"Burrata e Pomodoro", cuisine:"Italian", desc:"Creamy burrata on a bed of heritage tomatoes, pesto genovese, and 25-year aged balsamic.", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80", ingredients:"Fresh burrata, heritage tomatoes, basil pesto, balsamic reduction", method:"Cold assembly, room temperature", time:"15 min", diff:"Beginner" },
  { id:5, name:"Lobster Bisque", cuisine:"Seafood", desc:"Velvety bisque of Atlantic lobster with a cognac flambé, crème fraîche and coral oil swirl.", img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", ingredients:"Lobster shells, cream, cognac, mirepoix, tarragon", method:"Reduction & blending", time:"90 min", diff:"Advanced" },
  { id:6, name:"Duck à l'Orange", cuisine:"French", desc:"Slow-braised duck breast glazed with bitter orange sauce and served with pommes dauphine.", img:"https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80", ingredients:"Magret de canard, blood orange, honey, thyme, butter", method:"Sear and braise, 3-hour duck jus", time:"3 hr", diff:"Expert" },
  { id:7, name:"Sicilian Caponata", cuisine:"Italian", desc:"Sweet-and-sour aubergine stew with pine nuts, olives, and capers — a Palermo classic.", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", ingredients:"Aubergine, celery, capers, olives, pine nuts, agrodolce", method:"Sauté and stew", time:"45 min", diff:"Intermediate" },
  { id:8, name:"Rack of Lamb Persillé", cuisine:"French", desc:"French-trimmed lamb rack crusted with herbed breadcrumbs, roasted to a perfect blush pink.", img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", ingredients:"Rack of lamb, Dijon, panko, parsley, rosemary, garlic", method:"Crust & high-heat roasting", time:"50 min", diff:"Advanced" },
  { id:9, name:"Tagliatelle al Ragù", cuisine:"Italian", desc:"Slow-cooked Bolognese of pork and veal, tossed with hand-cut egg tagliatelle.", img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80", ingredients:"Pork shoulder, veal, hand-cut egg pasta, soffritto, wine", method:"6-hour braised ragù", time:"6 hr", diff:"Intermediate" },
  { id:10, name:"Tiramisu Classico", cuisine:"Italian Dessert", desc:"The definitive Italian dessert — mascarpone cloud, espresso-soaked savoiardi, and Valrhona cocoa.", img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80", ingredients:"Mascarpone, eggs, savoiardi, espresso, marsala, cocoa", method:"Layered assembly, overnight set", time:"30 min + chill", diff:"Intermediate" },
  { id:11, name:"Oysters Rockefeller", cuisine:"Seafood", desc:"Freshly shucked Pacific oysters baked with wilted spinach, Pernod beurre blanc, and breadcrumbs.", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", ingredients:"Pacific oysters, spinach, Pernod, shallots, butter, breadcrumbs", method:"Shuck, top, broil", time:"20 min", diff:"Intermediate" },
  { id:12, name:"Crème Brûlée à la Lavande", cuisine:"French Dessert", desc:"Silky lavender-scented custard beneath a perfectly caramelised sugar crust.", img:"https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80", ingredients:"Heavy cream, eggs, sugar, Provençal lavender, vanilla", method:"Bain-marie, blowtorch finish", time:"4 hr incl. chill", diff:"Intermediate" },
  { id:13, name:"Saffron Bouillabaisse", cuisine:"Mediterranean", desc:"The legendary Marseille fish stew with rouille, gruyère croutons, and a saffron-gold broth.", img:"https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80", ingredients:"Mixed fish, saffron, fennel, tomato, pastis, rouille", method:"Layered poaching in aromatic broth", time:"2 hr", diff:"Advanced" },
  { id:14, name:"Panna Cotta al Pistacchio", cuisine:"Italian Dessert", desc:"Pillow-soft pistachio panna cotta with a salted caramel drizzle and crushed praline.", img:"https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80", ingredients:"Pistachio paste, cream, gelatin, salted caramel, praline", method:"Set & chill", time:"2 hr incl. set", diff:"Beginner" },
  { id:15, name:"Beef Tartare Classique", cuisine:"French", desc:"Hand-chopped prime beef tenderloin with cornichons, capers, Dijon, and a quail egg yolk.", img:"https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80", ingredients:"Beef tenderloin, cornichon, capers, Dijon, shallot, quail egg", method:"Hand-chopped, cold assembly", time:"15 min", diff:"Intermediate" },
  { id:16, name:"Spaghetti alle Vongole", cuisine:"Italian", desc:"Thin spaghetti tossed with fresh clams, white wine, garlic, peperoncino, and sea salt.", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80", ingredients:"Spaghetti, vongole clams, white wine, garlic, parsley, chilli", method:"Quick braise, pasta finish in juices", time:"25 min", diff:"Intermediate" },
  { id:17, name:"Tarte Tatin", cuisine:"French Dessert", desc:"Upside-down caramelised apple tart from Sologne, served warm with crème fraîche.", img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80", ingredients:"Granny Smith apples, puff pastry, butter, sugar, Calvados", method:"Caramel, stovetop to oven inversion", time:"1 hr", diff:"Advanced" },
  { id:18, name:"Grilled Octopus", cuisine:"Mediterranean", desc:"Chargrilled octopus braised in wine, served on chickpea purée with smoked paprika oil.", img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", ingredients:"Octopus, chickpeas, paprika, lemon, coriander", method:"Braise & char-grill", time:"3 hr", diff:"Advanced" },
  { id:19, name:"Orecchiette con Cime di Rapa", cuisine:"Italian", desc:"Pugliese pasta tossed with bitter turnip tops, anchovies, garlic, and toasted breadcrumbs.", img:"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80", ingredients:"Orecchiette, cime di rapa, anchovies, garlic, pecorino", method:"Blanch greens, quick pan toss", time:"30 min", diff:"Intermediate" },
  { id:20, name:"Mille-Feuille Vanille", cuisine:"French Dessert", desc:"Crisp laminated pastry layered with Tahitian vanilla crème pâtissière and icing fondant.", img:"https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80", ingredients:"Puff pastry, pastry cream, fondant, Tahitian vanilla", method:"Bake, assemble, slice", time:"2 hr", diff:"Expert" },
];

const services = [
  { icon:"<i class='fas fa-spoon'></i>", title:"Private Chef", desc:"An exclusive dining experience in the comfort of your home — from market shopping to immaculate kitchen exit." },
  { icon:"<i class='fas fa-ring'></i>", title:"Wedding Catering", desc:"Bespoke menus for your most important day, styled to your vision with impeccable service." },
  { icon:"<i class='fas fa-building'></i>", title:"Corporate Catering", desc:"Impress clients and reward teams with curated boardroom lunches, gala dinners, and branded experiences." },
  { icon:"<i class='fas fa-birthday-cake'></i>", title:"Birthday Events", desc:"Personalised celebrations from intimate gatherings to grand parties — every detail handled." },
  { icon:"<i class='fas fa-user-chef'></i>", title:"Cooking Classes", desc:"Learn the craft first-hand in private sessions or small groups. Techniques, recipes, and secrets included." },
  { icon:"<i class='fas fa-box'></i>", title:"Meal Preparation", desc:"Weekly meal prep tailored to your dietary goals. Nutritious, chef-quality food ready in your fridge." },
  { icon:"<i class='fas fa-chart-pie'></i>", title:"Restaurant Consulting", desc:"Menu development, kitchen setup, team training, and operational guidance for new or existing restaurants." },
  { icon:"<i class='fas fa-star'></i>", title:"Luxury Dining Experiences", desc:"Pop-up supperclubs, chef's table evenings, and destination dinners in extraordinary locations." },
];

const timeline = [
  { year:"2022-2023", role:"Culinary Training", place:"Paris, France", desc:"Built a foundation in fine dining through culinary training and early private catering experience." },
  { year:"2023-2025", role:"Fine Dining Career", place:"Paris, France", desc:"Studied at Ecole Ducasse and trained across boutique restaurants before focusing on private dining and bespoke experiences." },

];
const awards = [
  { icon:"<i class='fas fa-star'></i>", title:"Michelin Guide Recognition", year:"2022", desc:"Featured in the Michelin Guide for East Africa as a notable private chef experience." },
  { icon:"<i class='fas fa-trophy'></i>", title:"Best Private Chef — East Africa", year:"2023", desc:"Awarded by the East African Culinary Federation at the annual Gala Awards." },
  { icon:"<i class='fas fa-globe'></i>", title:"International Food Festival Winner", year:"2021", desc:"First place, Contemporary Italian category, at the Cape Town International Food Festival." },
   
];

const galleryItems = [
  { img:"image15.jpeg", cat:"Dinner" },
  { img:"image14.jpeg", cat:"Breakfast" },
  { img:"image9.jpeg", cat:"Lunch" },
  { img:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80", cat:"Cocktails" },
  { img:"image17.jpeg", cat:"Events" },
  { img:"image1.jpeg", cat:"Desserts" },
  { img:"image18.jpeg", cat:"Kitchen" },
  { img:"image2.jpeg", cat:"Dinner" },
  { img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", cat:"Events" },
  { img:"image16.jpeg", cat:"Desserts" },
  { img:"image6.jpeg", cat:"Lunch" },
  { img:"image19.jpeg", cat:"Behind the Scenes" },
];

const testimonials = [
  { name:"Amina N. ", event:"Karen, Nairobi", review:"Bianca transformed my birthday dinner into an unforgettable experience. The food was beautifully presented, every course was delicious, and the professionalism was outstanding. My guests are still talking about it weeks later.", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
  { name:"Kevin O. ", event:"Westlands", review:"From the initial consultation to the final dessert, everything exceeded our expectations. The service was warm, punctual, and incredibly professional.", avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
  { name:"Caroline M.", event:"Kitisuru", review:"Every dish looked like art. The guests couldn't stop taking photos before eating. It was an amazing culinary experience.", avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
  { name:"Brian & Faith M.", event:"Runda", review:"We booked Bianca for our anniversary and couldn't have made a better choice. The menu was customized perfectly for us, and the attention to detail made the evening feel like dining in a five-star restaurant.", avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80" },
];

const recipes = [
  { name:"Cacio e Pepe Perfetto", cat:"Italian", time:"20 min", diff:"Intermediate", desc:"The Roman classic — spaghetti, pecorino romano, and black pepper. Nothing else. The magic is all in the technique.", img:"https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600&q=80" },
  { name:"Tarte au Citron", cat:"Desserts", time:"1.5 hr", diff:"Advanced", desc:"Silky lemon curd in a crisp shortcrust shell — bright, sharp, and irresistible.", img:"https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80" },
  { name:"Insalata Caprese", cat:"Italian", time:"10 min", diff:"Beginner", desc:"Buffalo mozzarella, ripe tomatoes, basil, and your finest olive oil. The art is in the sourcing.", img:"https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80" },
  { name:"Grilled Salmon with Salsa Verde", cat:"Healthy", time:"25 min", diff:"Beginner", desc:"Clean, vibrant, and protein-packed — pan-seared salmon with a zingy herbed sauce.", img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
  { name:"Gamberi al Limone", cat:"Seafood", time:"15 min", diff:"Beginner", desc:"Sautéed king prawns with lemon, garlic, and white wine. Ready in 15 minutes, tastes like the Amalfi coast.", img:"https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80" },
  { name:"Ribollita Toscana", cat:"Vegetarian", time:"2 hr", diff:"Intermediate", desc:"A hearty Tuscan bread and vegetable stew — the ultimate Italian comfort food.", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
];

const blogs = [
  { cat:"Cooking Tips", title:"The Secret to a Perfect Risotto Every Time", date:"14 Jun 2025", excerpt:"Risotto fails are almost always about two things: wrong heat and wrong timing. I'll show you exactly how to nail it.", img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
  { cat:"Wine Pairing", title:"Why Burgundy Changes Everything About Red Meat", date:"2 May 2025", excerpt:"The right glass of wine doesn't just accompany a dish — it transforms it. Here's my guide to pairing with confidence.", img:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
  { cat:"Seasonal", title:"Cooking with Truffles: A Beginner's Survival Guide", date:"19 Mar 2025", excerpt:"Truffles are unforgiving of heat and impatient cooks. Learn the rules before you break them.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
];

/* =============================================
   RENDER FUNCTIONS
   ============================================= */
function renderDishes(filter='All') {
  const g = document.getElementById('dishes-grid');
  const items = filter === 'All' ? dishes : dishes.filter(d => d.cuisine === filter || d.cuisine.includes(filter));
  g.innerHTML = items.map(d => `
    <div class="dish-card reveal" onclick="openModal(${d.id})">
      <div class="dish-img">
        <img loading="lazy" src="${d.img}" alt="${d.name}">
        <div class="dish-overlay"><button class="dish-view-btn">View Dish</button></div>
      </div>
      <div class="dish-info">
        <div class="dish-cuisine">${d.cuisine}</div>
        <h3 class="dish-name">${d.name}</h3>
        <p class="dish-desc">${d.desc}</p>
        <div class="dish-meta">
          <span>⏱ ${d.time}</span>
          <span>⚡ ${d.diff}</span>
        </div>
      </div>
    </div>`).join('');
}

function openModal(id) {
  const d = dishes.find(x => x.id === id);
  if (!d) return;
  document.getElementById('modal-img').src = d.img;
  document.getElementById('modal-img').alt = d.name;
  document.getElementById('modal-cuisine').textContent = d.cuisine;
  document.getElementById('modal-title').textContent = d.name;
  document.getElementById('modal-desc').textContent = d.desc;
  document.getElementById('modal-ingredients').textContent = d.ingredients;
  document.getElementById('modal-method').textContent = d.method;
  document.getElementById('modal-time').textContent = d.time;
  document.getElementById('modal-diff').textContent = d.diff;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => { if(e.target === document.getElementById('modal-overlay')) closeModal(); });
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderServices() {
  const g = document.getElementById('services-grid');
  services.forEach(s => {
    g.innerHTML += `
    <div class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#booking" class="service-link">Enquire Now →</a>
    </div>`;
  });
}

function renderTimeline() {
  const g = document.getElementById('timeline');
  timeline.forEach((t,i) => {
    const isLeft = i % 2 === 0;
    g.innerHTML += `
    <div class="tl-item reveal">
      <div class="tl-left">${isLeft ? `<div class="tl-year">${t.year}</div><div class="tl-role">${t.role}</div><div class="tl-place">${t.place}</div><p class="tl-desc">${t.desc}</p>` : ''}</div>
      <div><div class="tl-dot"></div></div>
      <div class="tl-right">${!isLeft ? `<div class="tl-year">${t.year}</div><div class="tl-role">${t.role}</div><div class="tl-place">${t.place}</div><p class="tl-desc">${t.desc}</p>` : ''}</div>
    </div>`;
  });
}

function renderAwards() {
  const g = document.getElementById('awards-grid');
  awards.forEach(a => {
    g.innerHTML += `
    <div class="award-card reveal">
      <div class="award-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
      <div class="award-year">${a.year}</div>
    </div>`;
  });
}

function renderGallery(filter='All') {
  const g = document.getElementById('masonry-grid');
  const items = filter === 'All' ? galleryItems : galleryItems.filter(x => x.cat === filter);
  g.innerHTML = items.map(item => `
    <div class="masonry-item">
      <img loading="lazy" src="${item.img}" alt="${item.cat}" onclick="openLightbox('${item.img}')">
      <div class="masonry-overlay"><div class="masonry-cat">${item.cat}</div></div>
    </div>`).join('');
}

function renderGalleryFilters() {
  const cats = ['All', ...new Set(galleryItems.map(x => x.cat))];
  const g = document.getElementById('gallery-filters');
  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (c === 'All' ? ' active' : '');
    btn.textContent = c;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#gallery-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(c);
    });
    g.appendChild(btn);
  });
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.getElementById('lightbox-close').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
});
document.getElementById('lightbox').addEventListener('click', e => {
  if(e.target === document.getElementById('lightbox')) {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
});

function renderTestimonials() {
  const g = document.getElementById('testi-slides');
  testimonials.forEach(t => {
    g.innerHTML += `
    <div class="testi-slide">
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"${t.review}"</p>
        <div class="testi-client">
          <div class="testi-avatar"><img loading="lazy" src="${t.avatar}" alt="${t.name}"></div>
          <div><div class="testi-name">${t.name}</div><div class="testi-event">${t.event}</div></div>
        </div>
      </div>
    </div>`;
  });
}

let currentSlide = 0;
let slideInterval = null;
function initTestiCarousel() {
  const prev = document.getElementById('testi-prev');
  const next = document.getElementById('testi-next');
  const slides = document.getElementById('testi-slides');
  const total = testimonials.length;
  function goTo(i) {
    currentSlide = (i + total) % total;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    clearInterval(slideInterval);
    startAutoAdvance();
  }
  function startAutoAdvance() {
    slideInterval = setInterval(() => goTo(currentSlide + 1), 6000);
  }
  prev.addEventListener('click', () => goTo(currentSlide - 1));
  next.addEventListener('click', () => goTo(currentSlide + 1));
  startAutoAdvance();
}

function renderRecipes() {
  const g = document.getElementById('recipes-grid');
  recipes.forEach(r => {
    g.innerHTML += `
    <div class="recipe-card reveal">
      <div class="recipe-img">
        <img loading="lazy" src="${r.img}" alt="${r.name}">
        <div class="recipe-badge">${r.cat}</div>
      </div>
      <div class="recipe-body">
        <div class="recipe-meta"><span>⏱ ${r.time}</span><span>⚡ ${r.diff}</span></div>
        <h3 class="recipe-name">${r.name}</h3>
        <p class="recipe-desc">${r.desc}</p>
        <a href="#" class="recipe-read">Read Recipe →</a>
      </div>
    </div>`;
  });
}

function renderRecipeFilters() {
  const cats = ['All', ...new Set(recipes.map(x => x.cat))];
  const g = document.getElementById('recipe-filters');
  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (c === 'All' ? ' active' : '');
    btn.textContent = c;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#recipe-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipesFiltered(c);
    });
    g.appendChild(btn);
  });
}

function renderRecipesFiltered(filter='All') {
  const g = document.getElementById('recipes-grid');
  const items = filter === 'All' ? recipes : recipes.filter(x => x.cat === filter);
  g.innerHTML = items.map(r => `
    <div class="recipe-card reveal">
      <div class="recipe-img">
        <img loading="lazy" src="${r.img}" alt="${r.name}">
        <div class="recipe-badge">${r.cat}</div>
      </div>
      <div class="recipe-body">
        <div class="recipe-meta"><span>⏱ ${r.time}</span><span>⚡ ${r.diff}</span></div>
        <h3 class="recipe-name">${r.name}</h3>
        <p class="recipe-desc">${r.desc}</p>
        <a href="#" class="recipe-read">Read Recipe →</a>
      </div>
    </div>`).join('');
}

function renderBlog() {
  const g = document.getElementById('blog-grid');
  blogs.forEach(b => {
    g.innerHTML += `
    <div class="blog-card reveal">
      <div class="blog-img"><img loading="lazy" src="${b.img}" alt="${b.title}"></div>
      <div class="blog-body">
        <div class="blog-cat">${b.cat}</div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <div class="blog-footer">
          <span class="blog-date">${b.date}</span>
          <a href="#" class="blog-read">Read More →</a>
        </div>
      </div>
    </div>`;
  });
}

function initCuisineLinks() {
  document.querySelectorAll('.cuisine-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const cuisine = link.dataset.cuisine;
      renderDishes(cuisine);
      document.getElementById('dishes').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initVideoPlayer() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  video.preload = 'metadata';
  video.setAttribute('playsinline', '');
  video.load();

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

/* =============================================
   PARTICLES
   ============================================= */
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
    p.style.animationDuration = (Math.random() * 12 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.opacity = Math.random() * 0.5;
    container.appendChild(p);
  }
}

/* =============================================
   CURSOR
   ============================================= */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
function animateRing() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.addEventListener('mousedown', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1.5)'; });
document.addEventListener('mouseup', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });

/* =============================================
   SCROLL BEHAVIORS
   ============================================= */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('scroll-progress').style.width = (scrolled / total * 100) + '%';
  const navbar = document.getElementById('navbar');
  if (scrolled > 80) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
  const backTop = document.getElementById('back-top');
  if (scrolled > 400) backTop.classList.add('visible'); else backTop.classList.remove('visible');
  // Parallax hero
  document.getElementById('hero-bg').style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
});

document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* =============================================
   INTERSECTION OBSERVER (REVEAL + SKILLS + STATS)
   ============================================= */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Skill bars
      e.target.querySelectorAll && e.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      // Stats counter
      e.target.querySelectorAll && e.target.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.target;
        if (target && el.textContent === '0') {
          let count = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = count + (target >= 100 ? '+' : '+');
            if (count >= target) clearInterval(timer);
          }, 20);
        }
      });
    }
  });
}, { threshold: 0.15 });

function observeAll() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));
  // Also observe about-content for skills
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    const skillsIo = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
        });
        skillsIo.disconnect();
      }
    }, { threshold: 0.3 });
    skillsIo.observe(aboutContent);
  }
  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    const statsIo = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.stat-num').forEach(el => {
          const target = +el.dataset.target;
          let count = 0; const step = Math.ceil(target/60);
          const timer = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = count + '+';
            if (count >= target) clearInterval(timer);
          }, 20);
        });
        statsIo.disconnect();
      }
    }, { threshold: 0.5 });
    statsIo.observe(statsGrid);
  }
}

/* =============================================
   MOBILE MENU
   ============================================= */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mobile-close').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
});
document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
}));

/* =============================================
   BOOKING FORM
   ============================================= */
document.getElementById('booking-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('booking-form').style.display = 'none';
  const success = document.getElementById('form-success');
  success.style.display = 'block';
});

/* =============================================
   DARK/LIGHT TOGGLE
   ============================================= */
const dmToggle = document.getElementById('dm-toggle');
dmToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = dmToggle.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

/* =============================================
   LOADER
   ============================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hide');
  setTimeout(() => { loader.style.display = 'none'; }, 3200);
});

/* =============================================
   INIT
   ============================================= */
renderDishes();
renderServices();
renderTimeline();
renderGalleryFilters();
renderGallery();
renderTestimonials();
initTestiCarousel();
initCuisineLinks();
initVideoPlayer();
createParticles();

// Run observer after all content rendered
setTimeout(observeAll, 100);

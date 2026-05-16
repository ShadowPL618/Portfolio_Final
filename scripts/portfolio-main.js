/**
 * portfolio-main.js
 * Core engine for the static portfolio site.
 * Handles data rendering and language switching for all pages.
 */

/* ======================== LANGUAGE SWITCHING ======================== */
const PORTFOLIO_LANG = {
  STORAGE_KEY: 'portfolio_lang',
  DEFAULT: 'en',
  current: 'en',

  init() {
    this.current = localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT;
    const htmlKeys = [
      'hero.badge_sub', 'ttt.card_text', 'drone.overview_text', 'drone.contributions_text',
      'energy.overview_text', 'energy.participation_text',
      'drone.title', 'drone.subtitle', 'energy.title', 'energy.subtitle',
      'about.title', 'about.contact', 'about.skills_proficient', 'about.skills_learning',
      'about.languages', 'about.favorite_languages', 'about.certificates'
    ];
    return { current: this.current, htmlKeys };
  },

  getLang() {
    return this.current;
  },

  switch(lang) {
    this.current = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.translatePage();
  },

  translatePage() {
    const lang = this.current;
    const i18n = window.PORTFOLIO_I18N;
    if (!i18n || !i18n[lang]) return;

    const elements = document.querySelectorAll('[data-i18n]');
    const htmlKeysList = [
      'hero.badge_sub', 'ttt.card_text', 'drone.overview_text', 'drone.contributions_text',
      'energy.overview_text', 'energy.participation_text',
      'drone.title', 'drone.subtitle', 'energy.title', 'energy.subtitle',
      'about.title', 'about.contact', 'about.skills_proficient', 'about.skills_learning',
      'about.languages', 'about.favorite_languages', 'about.certificates'
    ];

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = i18n[lang][key];
      if (translation === undefined) return;

      if (htmlKeysList.includes(key)) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });

    document.documentElement.lang = lang === 'nl' ? 'nl-NL' : 'en-GB';

    // Update toggle state
    const checkbox = document.getElementById('langToggle');
    if (checkbox) checkbox.checked = (lang === 'nl');
  },

  toggle() {
    const newLang = this.current === 'en' ? 'nl' : 'en';
    this.switch(newLang);
  }
};

/* ======================== DATA RENDERING ======================== */
const PORTFOLIO_RENDER = {
  data: null,
  category: null,

  init() {
    this.data = window.PORTFOLIO_DATA;
    if (!this.data) return;
  },

  /* --- Render hero section --- */
  renderHero() {
    const a = this.data.about;
    document.querySelectorAll('[data-field="hero-name"]').forEach(el => el.textContent = a.name);
    document.querySelectorAll('[data-field="hero-title"]').forEach(el => el.textContent = a.title);
    document.querySelectorAll('[data-field="hero-eyebrow"]').forEach(el => el.textContent = 'Portfolio');
    document.querySelectorAll('[data-field="hero-participation"]').forEach(el => el.textContent = a.participation);
    const profileImgs = document.querySelectorAll('[data-field="hero-image"]');
    profileImgs.forEach(img => { if (img.tagName === 'IMG') img.src = a.profile_image; });
  },

  /* --- Render about section --- */
  renderAbout() {
    const a = this.data.about;
    const c = this.data.contact;

    document.querySelectorAll('[data-field="about-name"]').forEach(el => el.textContent = a.name);
    document.querySelectorAll('[data-field="about-title"]').forEach(el => el.textContent = a.title);
    document.querySelectorAll('[data-field="about-bio"]').forEach(el => el.innerHTML = a.bio.replace(/\n/g, '<br>'));
    const aboutImgs = document.querySelectorAll('[data-field="about-image"]');
    aboutImgs.forEach(img => { if (img.tagName === 'IMG') img.src = a.profile_image; });
    document.querySelectorAll('[data-field="contact-email"]').forEach(el => el.textContent = c.email);
    document.querySelectorAll('[data-field="contact-github"]').forEach(el => { el.href = c.github_url; });
    document.querySelectorAll('[data-field="contact-linkedin"]').forEach(el => { el.href = c.linkedin_url; });

    // Render skills
    const proficientContainer = document.getElementById('skills-proficient');
    const learningContainer = document.getElementById('skills-learning');
    if (proficientContainer) {
      proficientContainer.innerHTML = this.data.skills.proficient.map(s =>
        `<span class="badge badge-gold">${s.skill_name}</span>`
      ).join('');
    }
    if (learningContainer) {
      learningContainer.innerHTML = this.data.skills.learning.map(s =>
        `<span class="badge badge-crimson">${s.skill_name}</span>`
      ).join('');
    }

    // Render languages
    const langContainer = document.getElementById('languages-grid');
    if (langContainer) {
      langContainer.innerHTML = this.data.languages.map(l =>
        `<div class="language-item">
          <span class="lang-name">
            ${l.language_name}
            ${l.is_native ? '<span class="lang-native-tag">Native</span>' : ''}
          </span>
          <span class="lang-level">${l.proficiency_level}</span>
        </div>`
      ).join('');
    }

    // Render favorite technologies
    const favContainer = document.getElementById('favorite-technologies');
    if (favContainer && a.favorite_technologies && a.favorite_technologies.length > 0) {
      favContainer.innerHTML = a.favorite_technologies.map(t =>
        `<span class="badge badge-gold badge-favorite"><i class="fas fa-star"></i> ${t}</span>`
      ).join('');
    }

    // Render certificates
    const certContainer = document.getElementById('certificates-list');
    if (certContainer) {
      certContainer.innerHTML = this.data.certificates.map(cert =>
        `<li class="certificate-item">
          <i class="fas fa-certificate"></i>
          <div class="certificate-body">
            <span class="certificate-title">${cert.title}</span>
            <span class="certificate-meta">${cert.issuer} &nbsp;·&nbsp; ${cert.year}</span>
          </div>
        </li>`
      ).join('');
    }
  },

  /* --- Render project previews for index page --- */
  renderProjectPreviews() {
    const sectionMap = {
      'wede': { label: 'WEDE', subtitle: 'Web Development Projects', icon: 'fas fa-globe', page: 'pages/wede.html' },
      'ebsy': { label: 'EBSY', subtitle: 'Embedded Systems Projects', icon: 'fas fa-microchip', page: 'pages/ebsy.html' },
      'appr': { label: 'APPR', subtitle: 'Application Programming Projects', icon: 'fas fa-code', page: 'pages/appr.html' }
    };

    Object.entries(sectionMap).forEach(([key, cfg]) => {
      const container = document.getElementById(`projects-${key}`);
      if (!container) return;

      const projects = this.data.projects[key.toUpperCase()] || [];
      // Only show non-collaborative projects in previews
      const previews = projects.filter(p => !p.is_collaborative);

      container.innerHTML = previews.map(p =>
        `<div class="preview-card">
          ${p.image_path ? `
          <div class="preview-card-img-wrap">
            <img src="${p.image_path}" alt="${p.title}" class="preview-card-img" loading="lazy">
            <div class="preview-card-overlay"></div>
          </div>` : ''}
          <div class="preview-card-body">
            <h3 class="preview-card-title">${p.title}</h3>
            <p class="preview-card-desc">${p.short_description}</p>
            ${p.technologies ? `
            <div class="tech-tags">
              ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>` : ''}
          </div>
        </div>`
      ).join('');
    });
  },

  /* --- Render project detail page (used on wede, ebsy, appr) --- */
  renderProjectDetail(category) {
    const container = document.getElementById('projects-detailed');
    if (!container) return;

    const projects = this.data.projects[category] || [];

    container.innerHTML = projects.map(p => {
      const mediaItems = p.media && p.media.length > 0 ? p.media : [];

      return `
        <div class="project-detailed-card">
          ${mediaItems.length > 0 ? `
          <div class="project-media-carousel">
            <div class="carousel-main">
              ${mediaItems.map((m, idx) => `
                <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                  <img src="../${m.path}" alt="${m.caption || p.title}">
                </div>
              `).join('')}
            </div>
            ${mediaItems.length > 1 ? `
            <div class="carousel-nav">
              <button class="carousel-prev" onclick="PORTFOLIO_UI.changeSlide(this, -1)"><i class="fas fa-chevron-left"></i></button>
              <button class="carousel-next" onclick="PORTFOLIO_UI.changeSlide(this, 1)"><i class="fas fa-chevron-right"></i></button>
            </div>
            <div class="carousel-indicators">
              ${mediaItems.map((m, idx) => `
                <span class="indicator ${idx === 0 ? 'active' : ''}" onclick="PORTFOLIO_UI.goToSlide(this, ${idx})"></span>
              `).join('')}
            </div>` : ''}
          </div>` : ''}

          <div class="project-detailed-content">
            <h3>${p.title}</h3>

            ${p.is_collaborative ? `<span class="collab-tag"><i class="fas fa-users"></i> <span data-i18n="project.collaborative">Collaborative Project</span></span>` : ''}

            ${p.overview ? `
            <div class="project-overview">
              <h4 data-i18n="project.overview">Overview</h4>
              <p>${p.overview}</p>
            </div>` : ''}

            <div class="project-description">
              <h4 data-i18n="project.description">Description</h4>
              <p>${p.description}</p>
            </div>

            ${p.technologies ? `
            <div class="project-tech-section">
              <h4 data-i18n="project.technologies">Technologies Used</h4>
              <div class="project-tech">
                ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
              </div>
            </div>` : ''}

            <div class="project-action">
              ${p.github_url ? `
              <a href="${p.github_url}" target="_blank" rel="noopener" class="btn-github">
                <i class="fab fa-github"></i> <span data-i18n="project.view_github">View on GitHub</span>
              </a>` : ''}
              ${p.is_private && !p.project_link ? `
              <span class="btn-outline disabled-btn">
                <i class="fas fa-lock"></i> <span data-i18n="project.private_code">Code Private / Professional Reference</span>
              </span>` : ''}
              ${p.project_link ? `
              <a href="${p.project_link}" target="_blank" rel="noopener" class="btn-gold">
                ${p.is_collaborative ? '<i class="fas fa-external-link-alt"></i>' : '<i class="fas fa-arrow-right"></i>'} <span data-i18n="project.view_site">View Project Site</span>
              </a>` : ''}
            </div>
          </div>
        </div>`;
    }).join('');
  },

  /* --- Render copyright footer --- */
  renderFooter() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();

    const nameEl = document.getElementById('footer-name');
    if (nameEl && this.data) nameEl.textContent = this.data.about.name;
  }
};

/* ======================== UI HELPERS ======================== */
const PORTFOLIO_UI = {
  /* Navigation toggle */
  initNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('nav-menu--open');
        toggle.classList.toggle('nav-toggle--active');
      });
      menu.querySelectorAll('.nav-link').forEach(l =>
        l.addEventListener('click', () => {
          menu.classList.remove('nav-menu--open');
          toggle.classList.remove('nav-toggle--active');
        })
      );
    }

    /* Active nav on scroll */
    if (document.querySelector('.hero')) {
      const sections = document.querySelectorAll('section[id]');
      const links = document.querySelectorAll('.nav-link');
      window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
        links.forEach(l => l.classList.toggle('nav-link--active', l.getAttribute('href') === `#${cur}`));
      }, { passive: true });
    }
  },

  /* Fade-in observer */
  initFadeIn() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.preview-card, .about-grid, .hero-text, .hero-photo-wrap, .project-detailed-card').forEach(el => obs.observe(el));
  },

  /* Language toggle init */
  initLangToggle() {
    const checkbox = document.getElementById('langToggle');
    if (checkbox) {
      checkbox.addEventListener('change', () => PORTFOLIO_LANG.toggle());
      checkbox.checked = (PORTFOLIO_LANG.current === 'nl');
    }
  },

  /* Carousel navigation */
  changeSlide(btn, dir) {
    const carousel = btn.closest('.project-media-carousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.indicator');
    let cur = [...items].findIndex(i => i.classList.contains('active'));
    let next = (cur + dir + items.length) % items.length;
    items[cur].classList.remove('active');
    items[next].classList.add('active');
    if (dots.length) { dots[cur].classList.remove('active'); dots[next].classList.add('active'); }
  },

  goToSlide(dot, idx) {
    const carousel = dot.closest('.project-media-carousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.indicator');
    let cur = [...items].findIndex(i => i.classList.contains('active'));
    items[cur].classList.remove('active');
    items[idx].classList.add('active');
    dots[cur].classList.remove('active');
    dots[idx].classList.add('active');
  },

  /* Init everything */
  init() {
    PORTFOLIO_RENDER.init();
    if (PORTFOLIO_RENDER.data) {
      PORTFOLIO_RENDER.renderHero();
      PORTFOLIO_RENDER.renderAbout();
      PORTFOLIO_RENDER.renderProjectPreviews();
      PORTFOLIO_RENDER.renderFooter();
    }
    this.initNav();
    this.initFadeIn();
    this.initLangToggle();

    // Translate page on load
    PORTFOLIO_LANG.translatePage();
  }
};

/* ======================== AUTO-INIT ON DOM READY ======================== */
document.addEventListener('DOMContentLoaded', () => PORTFOLIO_UI.init());

// ========== JS COMPARTILHADO — Dr. Samuel Chagas ==========

// Navbar scroll effect
(function () {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }
})();

// Mobile menu (global — usado por onclick no HTML)
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Reveal on scroll
(function () {
  var revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(function (el) { revealObserver.observe(el); });

  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('visible'); }, i * 150);
    });
  });
})();

// Counter animation
(function () {
  var counters = document.querySelectorAll('.contador-number');
  if (!counters.length) return;
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = parseInt(entry.target.dataset.target);
        var current = 0;
        var increment = target / 60;
        var timer = setInterval(function () {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target >= 100 ? '+' + target.toLocaleString() : target + (target === 98 ? '%' : '+');
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 25);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { counterObserver.observe(c); });
})();

// Smooth scroll das ancoras — animacao propria (rAF), nao depende do scroll-behavior
// nativo (que trava com overflow-x:hidden) e compensa a altura da navbar fixa.
function smoothScrollTo(targetY, duration) {
  var startY = window.pageYOffset || document.documentElement.scrollTop;
  var diff = targetY - startY;
  if (Math.abs(diff) < 2) { window.scrollTo(0, targetY); return; }
  var startTime = null;
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function step(now) {
    if (startTime === null) startTime = now;
    var t = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, Math.round(startY + diff * ease(t)));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var nav = document.getElementById('navbar');
    var offset = (nav ? nav.offsetHeight : 0) + 12;
    var y = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - offset;
    smoothScrollTo(y, 600);
    if (history.replaceState) history.replaceState(null, '', id);
  });
});

// Instagram embeds: carrega sob demanda (perf — evita ~2.5s de bloqueio no topo)
(function () {
  var vids = document.getElementById('videos');
  if (!vids || !document.querySelector('.instagram-media, blockquote.instagram-media')) return;
  var loaded = false;
  function loadIG() {
    if (loaded) return; loaded = true;
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(s);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { loadIG(); io.disconnect(); } });
    }, { rootMargin: '500px' });
    io.observe(vids);
  } else { loadIG(); }
})();

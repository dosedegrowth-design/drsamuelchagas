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

// Smooth scroll para ancoras da mesma pagina
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    var target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

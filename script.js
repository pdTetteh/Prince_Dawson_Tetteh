const navLinks = document.querySelectorAll('.nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.panel, .split-layout > div, .hero-copy');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

const syncActiveNav = () => {
  let currentId = '';
  sections.forEach((section) => {
    const top = window.scrollY + 120;
    if (top >= section.offsetTop) currentId = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', syncActiveNav, { passive: true });
syncActiveNav();

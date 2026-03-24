const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-40% 0px -45% 0px', threshold: 0.01 });

sections.forEach((section) => observer.observe(section));

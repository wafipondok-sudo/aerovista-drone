document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-btn');
  const menu = document.querySelector('.nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add('visible'));
});

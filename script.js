/* ══════════════════════════════════════
   HAMBURGER MENU (mobile)
══════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');

navToggle.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  navToggle.textContent = isOpen ? '✕' : '☰';
});

// Cerrar drawer al hacer click en un link
navDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navDrawer.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

// Cerrar drawer al hacer click fuera
document.addEventListener('click', (e) => {
  if (!navDrawer.contains(e.target) && !navToggle.contains(e.target)) {
    navDrawer.classList.remove('open');
    navToggle.textContent = '☰';
  }
});

/* ══════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
   Actualiza topnav + drawer juntos
══════════════════════════════════════ */
const sections   = document.querySelectorAll('section[id]');
const topLinks   = document.querySelectorAll('.topnav a');
const drawerLinks = document.querySelectorAll('.nav-drawer a');

const allNavLinks = [...topLinks, ...drawerLinks];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      allNavLinks.forEach(a => a.classList.remove('active'));
      const id = entry.target.id;
      document.querySelectorAll(`a[href="#${id}"]`).forEach(a => a.classList.add('active'));
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => observer.observe(s));

/* ══════════════════════════════════════
   HERO AVATAR — solo visible en mobile
   Se muestra/oculta según viewport
══════════════════════════════════════ */
const heroAvatar = document.querySelector('.hero-avatar');
function toggleHeroAvatar() {
  if (!heroAvatar) return;
  heroAvatar.style.display = window.innerWidth <= 768 ? 'block' : 'none';
}
toggleHeroAvatar();
window.addEventListener('resize', toggleHeroAvatar);
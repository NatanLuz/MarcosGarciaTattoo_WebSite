// Navegação mobile e outras funcionalidades (sem alternância de tema)
(function () {
  const root = document.documentElement;
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  // Aplicar tema escuro permanentemente
  root.classList.add('dark');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Fecha a aba de navageçao mobile
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }


 // Observa elementos e adiciona animação quando entram na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--in');
        observer.unobserve(entry.target); // para não observar mais após animar
      }
    });
  },
  { threshold: 0.12 } // percentual de visibilidade necessário
);


  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // footer ano
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
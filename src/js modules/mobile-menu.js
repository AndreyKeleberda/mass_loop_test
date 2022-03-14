(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const headerContainer = document.querySelector('.header');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    headerContainer.classList.toggle('menu-is-open');
    closeMenuBtn.classList.toggle('menu-is-open');
    openMenuBtn.classList.toggle('menu-is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

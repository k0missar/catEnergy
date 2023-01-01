const mainNav = document.querySelector('.main-nav__list');
const btnMenu = document.querySelector('.logo__btn-menu');

let openCloseMenu = function () {
  mainNav.classList.toggle('main-nav__list--open');
  btnMenu.classList.toggle('logo__btn-menu--open');
}

btnMenu.addEventListener('click', openCloseMenu);




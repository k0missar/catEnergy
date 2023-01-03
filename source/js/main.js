const mainNav = document.querySelector('.main-nav__list');
const btnMenu = document.querySelector('.logo__btn-menu');

let openCloseMenu = function () {
  mainNav.classList.toggle('main-nav__list--open');
  btnMenu.classList.toggle('logo__btn-menu--open');
}

btnMenu.addEventListener('click', openCloseMenu);



const slideInput = document.querySelector('.example-cat__input');
const greenBlock = document.querySelector('.example-cat__green-block');
const yellowBlock = document.querySelector('.example-cat__yellow-block');
slideInput.oninput = function() {
  greenBlock.style.width = slideInput.value + 'px';
  yellowBlock.style.width = (280 - slideInput.value) + 'px';
}

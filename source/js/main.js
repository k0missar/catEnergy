// Мобильное меню
const mainNav = document.querySelector('.main-nav__list');
const btnMenu = document.querySelector('.logo__btn-menu');
let openCloseMenu = function () {
  mainNav.classList.toggle('main-nav__list--open');
  btnMenu.classList.toggle('logo__btn-menu--open');
}
btnMenu.addEventListener('click', openCloseMenu);

// Слайдер до/после
const slideInput = document.querySelector('.example-cat__input');
const greenBlock = document.querySelector('.example-cat__green-block');
const yellowBlock = document.querySelector('.example-cat__yellow-block');
let count = 1; // Счетчик умножения в зависимости от экрана: мобильный = 1, планшент = 2.5
let win = window.screen.availWidth; // Начальный размер экрана
if (win >= 768) { // Если начальнай размер экрана больше или равен 768, то сразу задать величину счетчика на 2.5
  count = 2.5
}
// Отслеживаю изменение окна для увелечения слайдера в зависимости от экрана
window.addEventListener('resize', function() {
  if (win >= 768) {
    count = 2.5;
    return count;
  }
});
// Основаня функция слайдера
slideInput.oninput = function() {
  greenBlock.style.width = slideInput.value * count + 'px';
  yellowBlock.style.width = (280 - slideInput.value) * count + 'px';
}

var header = document.querySelector('.header');
var menuToggle = document.querySelector('.header__menu-toggle');

header.classList.remove('header__menu--nojs');

menuToggle.addEventListener('click', function() {
  if (header.classList.contains('header__menu--closed')) {
    header.classList.remove('header__menu--closed');
    header.classList.add('header__menu--opened');
  } else {
    header.classList.add('header__menu--closed');
    header.classList.remove('header__menu--opened');
  }
});

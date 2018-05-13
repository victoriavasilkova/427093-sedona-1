var header = document.querySelector('.header');
var menuToggle = document.querySelector('.header__menu-toggle');

header.classList.remove('header--nojs');

menuToggle.addEventListener('click', function() {
    header.classList.toggle('header--menu-closed');
});

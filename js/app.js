/* global document:true*/
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.header--menu');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open');
});

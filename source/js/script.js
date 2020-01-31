'use strict';

window.onscroll = function showHeader() {
  var nav = document.querySelector('.header__nav');

  if (window.pageYOffset > 70) {
    nav.classList.add('header__nav--fixed');
  } else {
    nav.classList.remove('header__nav--fixed');
  }
};

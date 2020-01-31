'use strict';

(function () {
  var header = document.querySelector('.header');
  var toggle = header.querySelector('.header__toggle');

  toggle.addEventListener('click', function () {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
    } else {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
    }
  });
})();

'use strict';

(function() {
  var slideIndex = 0;
  var slides = document.querySelectorAll('.slider__slide');
  var dots = document.querySelectorAll('.controls__toggle');
  var index = [1, 2, 3];

  function addDotClickHandler(dot, index) {
    dot.addEventListener('click', function() {
      showSlides(slideIndex = index);
    });
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' controls__toggle--active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' controls__toggle--active';
  }
  for (var i = 0; i < dots.length; i++) {
    addDotClickHandler(dots[i], index[i]);
  }
})();

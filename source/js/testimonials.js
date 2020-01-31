'use strict';

(function() {
  var slideIndex = 0;
  var slides = document.querySelectorAll('.testimonials__item');
  var arrowLeft = document.querySelector('.testimonials__arrow--left');
  var arrowRight = document.querySelector('.testimonials__arrow--right');

  arrowLeft.addEventListener('click', function() {
    showSlides(slideIndex -= 1);
  });

  arrowRight.addEventListener('click', function() {
    showSlides(slideIndex += 1);
  });

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
    slides[slideIndex - 1].style.display = 'block';
    console.log(slideIndex);
  }
})();

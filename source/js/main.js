'use strict';

// Табы абонементов

(function () {
  var sectionSeasonTickets = document.querySelector('.season-tickets');
  var abonementList = document.querySelector('.season-tickets__list');

  if (sectionSeasonTickets) {
    var mountsTab = sectionSeasonTickets.querySelectorAll('.mounts__button');
    var abonementElements = abonementList.querySelectorAll('.tickets__item');

    var switchAbonements = function (data) {
      abonementElements.forEach(function (card) {
        if (parseInt(card.getAttribute('tickets-mounth'), 10) !== parseInt(data, 10)) {
          card.classList.add('tickets__item--hide');
        } else {
          card.classList.remove('tickets__item--hide');
        }
      });
    };
    switchAbonements(1);

    mountsTab.forEach(function (button, n) {
      function onMountsBtnClick(evt) {
        evt.preventDefault();
        for (var i = 0; i < mountsTab.length; i++) {
          mountsTab[i].classList.remove('mounts__button--active');
        }
        mountsTab[n].classList.add('mounts__button--active');
        var tabMounth = parseInt(mountsTab[n].getAttribute('mounth'), 10);
        abonementElements.forEach(function (card) {
          var ticketMount = parseInt(card.getAttribute('tickets-mounth'), 10);
          if (tabMounth === ticketMount) {
            card.classList.remove('tickets__item--hide');
          } else {
            card.classList.add('tickets__item--hide');
          }
        });
      }

      button.addEventListener('click', onMountsBtnClick);
    });
  }
})();

// Слайдер тренеров

(function () {
  var sectionTrainers = document.querySelector('.trainers');
  var sliderTrainers = sectionTrainers.querySelector('.slider');

  if (!sectionTrainers.classList.contains('only-js')) {
    sectionTrainers.classList.add('only-js');
  }

  if (sliderTrainers) {
    sliderTrainers = new window.Swiper(sliderTrainers, {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      slideClass: 'slider__item',
      wrapperClass: 'slider__list',
      navigation: {
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        1311: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }
})();

// Слайдер отзывов

(function () {
  var sectionReviews = document.querySelector('.reviews');
  var sliderReviews = sectionReviews.querySelector('.reviews-slider');

  if (!sectionReviews.classList.contains('only-js')) {
    sectionReviews.classList.add('only-js');
  }

  if (sliderReviews) {
    sliderReviews = new window.Swiper(sliderReviews, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      slideClass: 'reviews-slider__item',
      wrapperClass: 'reviews-slider__list',
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
})();

// Маска телефона

(function () {
  var userPhoneInput = document.querySelector('input[type="tel"]');

  if (userPhoneInput) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    window.mask = new window.IMask(userPhoneInput, maskOptions);
  }

})();

document.addEventListener('DOMContentLoaded', () => {
    var servicesSwiper = new Swiper('.services-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    
         slidesPerView: 1,
         spaceBetween: 10,
        // slidesPerView: 'auto',
        // slidesPerGroup: 1,
        // sliderPerGroupAuto: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            800: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    var produtosSwiper = new Swiper('.produtos-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 768px
            361: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
      });

      var servicesSelectionSwiper = new Swiper('.services-selection-swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 768px
            900: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        }
      });
});
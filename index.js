document.addEventListener('DOMContentLoaded', () => {
    let btn_target = document.querySelector('[data-target=dropdown]');
    btn_target.addEventListener('click', (e) => {
        if(document.querySelector('.' + btn_target.dataset.target).dataset.state == 'false') {
            document.querySelector('.' + btn_target.dataset.target).dataset.state = 'true';
            btn_target.children[0].classList.remove('fa-caret-down');
            btn_target.children[0].classList.add('fa-caret-up');
        } else {
            document.querySelector('.' + btn_target.dataset.target).dataset.state = 'false';
            btn_target.children[0].classList.remove('fa-caret-up');
            btn_target.children[0].classList.add('fa-caret-down');
        }
    });
});

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
            426: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
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
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1440: {
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
            1024: {
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
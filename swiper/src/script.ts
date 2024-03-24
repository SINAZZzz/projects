import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // Attach event listeners to the navigation buttons
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    prevButton.addEventListener('click', () => {
        mySwiper.slidePrev();
    });

    nextButton.addEventListener('click', () => {
        mySwiper.slideNext();
    });
});

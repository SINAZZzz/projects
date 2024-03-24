"use strict";
exports.__esModule = true;
var swiper_1 = require("swiper");
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new swiper_1["default"]('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    });
    // Attach event listeners to the navigation buttons
    var prevButton = document.querySelector('.swiper-button-prev');
    var nextButton = document.querySelector('.swiper-button-next');
    prevButton.addEventListener('click', function () {
        mySwiper.slidePrev();
    });
    nextButton.addEventListener('click', function () {
        mySwiper.slideNext();
    });
});

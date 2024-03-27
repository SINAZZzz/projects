"use strict";
exports.__esModule = true;
var swiper_1 = require("swiper");
var swiper = new swiper_1["default"](".swiper", {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

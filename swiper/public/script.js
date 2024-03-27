"use strict";
import Swiper from "swiper";

var swiper = new Swiper.default(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

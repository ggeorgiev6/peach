require('./bootstrap');
import Vue from 'vue';
// Import Swiper Vue.js components
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/css';


Vue.component('slider', require('./components/slider.vue').default);

// Create a new Vue app
new Vue({
    el: '#app',
})

// Top slider

if (document.querySelector(".sliderSection")) {
    const swiper1 = new Swiper('.topSlider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-slider',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            draggable: true,
            dragSize: 100,
          },
        });
}

// Testimonials slider

if (document.querySelector(".testimonialsSwiper")) {
    const swiper2 = new Swiper('.testimonialsSwiper', {
        loop: true,
        pagination: {
            el: '.testimonials-pagination-slider',
            clickable: true,
        },
        scrollbar: {
            draggable: true,
            dragSize: 100,
          },
        });
  }

// Partners slider

if (document.querySelector(".partnersSlider")) {
    const swiper3 = new Swiper('.partnersSlider', {
        loop: true,
        pagination: {
            el: '.partners-pagination-slider',
            clickable: true,
        },
        navigation: {
            nextEl: '.partners-slider-button-next',
            prevEl: '.partners-slider-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 78,
        scrollbar: {
            draggable: true,
            dragSize: 100,
          },
    });
  }


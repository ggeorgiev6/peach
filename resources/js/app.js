require('./bootstrap');
// import '@babel/polyfill';

import Vue from 'vue';
// Import Swiper Vue.js components
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';





Vue.component('slider', require('./components/slider.vue').default);

// Create a new Vue app
new Vue({
    el: '#app',
})

// Top slider

if (document.querySelector(".sliderSection")) {
    const swiper1 = new Swiper('.topSlider', {
        fadeEffect: { 
            crossFade: true, 
        },
        virtualTranslate: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        speed: 1000, 
        slidersPerView: 1,
        effect: "fade",
        loop: true,
        effect: "fade",
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


// Nav

const menuTrigger = document.querySelectorAll('.menuTrigger');
const sideMenu = document.querySelector('.sideNavWrap');
const overlay = document.querySelector('.siteOverlay');
const body = document.querySelector('body');

// menuTrigger.addEventListener('click', function() {
//     menuTrigger.classList.toggle('active');
//     sideMenu.classList.toggle('open');
//     body.classList.toggle('showOverlay');
// });

Array.from(menuTrigger).forEach(menuTriggerLink => {
    menuTriggerLink.addEventListener('click', function(event) {
        menuTriggerLink.classList.toggle('active');
        sideMenu.classList.toggle('open');
        body.classList.toggle('showOverlay');
    });
});

require('./bootstrap');
// import '@babel/polyfill';

import Vue from 'vue';
import Swiper from 'swiper/bundle';
import SvgVue from 'svg-vue';
import LazyLoad from "vanilla-lazyload";
Vue.use(SvgVue);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


Vue.component('navigation', require('./components/Navigation.vue').default);

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
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {

            }
        }
    });
  }


// Side Menu animations

const animatedMenuItems = document.querySelectorAll('.animatedSideItem');
console.log(animatedMenuItems);

Array.from(animatedMenuItems).forEach((animatedMenuItem, index) => {
    console.log(animatedMenuItem.classList);

    if (animatedMenuItem.classList.contains('sideLinkItem')) {
        animatedMenuItem.classList.add('fadeInLeft')
    } else {
        animatedMenuItem.classList.add('fadeInBottom')
    }

    animatedMenuItem.style.animationDelay = index * 0.17 + 's';
});


// Navigation trigger

const menuTrigger = document.querySelectorAll('.menuTrigger');
const sideMenu = document.querySelector('.sideNavWrap');
const overlay = document.querySelector('.siteOverlay');
const body = document.querySelector('body');
const animated_items = document.querySelectorAll('.animatedSideItem');

Array.from(menuTrigger).forEach(menuTriggerLink => {
    menuTriggerLink.addEventListener('click', function(event) {
        menuTriggerLink.classList.toggle('active');
        sideMenu.classList.toggle('open');
        body.classList.toggle('showOverlay');
        Array.from(animated_items).forEach(animatedItem => {
            setTimeout(function(){
                animatedItem.classList.toggle('triggered');
            }, 600)
            
        });
    });
});

// Lazyload images

var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
    skip_invisible: false
});

// Scroll reveal intersection observer

const scroll_items = document.querySelectorAll(".scrollItem");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("triggered")
    }
  })
}
const options = {}

const myObserver = new IntersectionObserver(callback, options)

scroll_items.forEach(item => {
    myObserver.observe(item)         
})

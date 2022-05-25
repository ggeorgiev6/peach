<template>
  <section class="sliderSection">

      <div class="container">
          <div class="row">
              <div class="col-md-7">
                    <div class="swiper">
    
                        <div class="swiper-wrapper">
                        
                            <div class="swiper-slide"  v-for="slide in slides" v-bind:key="slide.id">
                                
                                <div v-html="slide.text" class="sliderText text-secondary"></div>

                                 <a href="/" class="button solid sliderButton">
                                    Learn more
                                </a>
                            </div>
                        
                        </div>

                        
  
                       
  
                    </div>
              </div>

              <div class="col-12">
                        <div class="sliderControlsWrap">
                            <div class="swiper-pagination swiper-pagination-slider"></div>
                            <div class="swiper-button-prev">prev</div>
                            <div class="swiper-button-next">next</div>
                        </div>
              </div>
          </div>
      </div>

      <div class="sliderImage">
          <img :src="slider_image" alt="">
      </div>
   
    
    </section>
</template>

<script>

// Import Swiper Vue.js components
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/css';


export default {
    

    mounted() {
        this.loadSlider();
    },

    data(){
        return {
            slider_image: '/images/banner-image.png',
            loading: false,
            slides: [
                {
                    text: '<div>A <u>proven</u> formula to reinvigorate and advance your business.</div>',
                },

                {
                    text: '<div>For those who know they can be more <u>successful</u>, the time is now.</div>',
                }
            ]
        };
    },
    methods: {
        loadSlider() {

            const swiper = new Swiper('.swiper', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination-slider',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                });
        },
    }

}
</script>

<style>

</style>
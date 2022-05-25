require('./bootstrap');
import Vue from 'vue';


Vue.component('slider', require('./components/slider.vue').default);

// Create a new Vue app
new Vue({
    el: '#app',
})

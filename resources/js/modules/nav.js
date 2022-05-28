'use strict';

const menuButton = document.querySelectorAll('.menuTrigger');
const menuOverlay = document.querySelector('.sideNavWrap');
const backgroundOverlay = document.querySelector('.siteOverlay');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menuOverlay.classList.toggle('open');
    backgroundOverlay.classList.toggle('bg-overlay');
});


document.addEventListener("DOMContentLoaded", function(event) { 
    
console.log('tested');
});
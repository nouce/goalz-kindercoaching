// This is all you.
import { createApp } from "vue";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import $ from "cash-dom";

gsap.registerPlugin(ScrollTrigger, SplitText)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Vue
const app = createApp({})

// Components
import WhatWeDo from './components/whatWeDo.vue'
app.component('what-we-do', WhatWeDo)

app.mount('#app')

// Mobile menu
$('.mobile-menu-trigger').on('click', function() {
    $('.nav-wrapper').addClass('active')
})

$('.menu-close-trigger').on('click', function() {
    $('.nav-wrapper').removeClass('active')
})



// Header animation

gsap.fromTo('.header-image', {
     opacity: 0,
}, {
     opacity: 1,
     duration: .6,
     delay: .4
})

// scrollAnimation
const tl = gsap.timeline({
     scrollTrigger: {
         trigger: '.header',
         start: 'bottom bottom',
         scrub: true
     }
 })

 tl.to('.header-image', {
     opacity: 0,
     duration: 5,
 })
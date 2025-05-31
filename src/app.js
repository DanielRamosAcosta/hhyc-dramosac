import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.reveal', { 
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    video.autoplay = true;
    video.load();
});

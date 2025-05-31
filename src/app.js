import ScrollReveal from 'scrollreveal';
import videoUrl from './assets/hero.mp4';
import posterUrl from './assets/hero-desktop.jpg?as=webp&width=1920';

ScrollReveal().reveal('.reveal', { 
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

window.addEventListener("DOMContentLoaded", () => {
    const heroBg = document.getElementById("hero-bg");

    const video = document.createElement("video");
    video.className = "hero-video";
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("poster", posterUrl);
    video.setAttribute("aria-hidden", "true");

    const source = document.createElement("source");
    source.setAttribute("src", videoUrl);
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
    video.append("Tu navegador no soporta videos.");

    // Insertar justo después del #hero-bg
    heroBg.parentNode.insertBefore(video, heroBg.nextSibling);
});

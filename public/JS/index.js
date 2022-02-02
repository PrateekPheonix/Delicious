const navLink = document.querySelectorAll('.header a')
const head = document.querySelectorAll('#hero h2')
const content = document.querySelectorAll('#hero p')
const button = document.querySelectorAll('.hero-btn')


window.addEventListener('load', revealAnim);

function revealAnim() {

    TDFADE = gsap.timeline();

    TDFADE
        .from(head, { autoAlpha: 0, y: -70, delay: 0.4, duration: 0.8, ease: "power1.out" })
        .from(content, { autoAlpha: 0, y: 40, duration: 0.8, ease: "power1.out" }, '-=0.4')
        .from(button, { autoAlpha: 0, y: 40, duration: 0.8, ease: "power1.out" }, '-=0.3')
        .from(navLink, { autoAlpha: 0, y: -30, duration: 0.4, stagger: 0.2, ease: "power1.out" }, '+=0.2')
}
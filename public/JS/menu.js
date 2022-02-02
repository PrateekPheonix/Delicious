const main = document.querySelector('.btn-main')
const salad = document.querySelector('.btn-salad')
const bev = document.querySelector('.btn-bev')

main.addEventListener('click', (e) => {
    document.querySelector('.main-course').style.display = "block"
    document.querySelector('.salad').style.display = "none"
    document.querySelector('.beverages').style.display = "none"
    gsap.from(document.querySelector('.main-course'), { autoAlpha: 0, y: -50, duration: 0.8, delay: 0.3, ease: "power1.out" })
    e.preventDefault()
})

salad.addEventListener('click', (e) => {
    document.querySelector('.main-course').style.display = "none"
    document.querySelector('.salad').style.display = "block"
    document.querySelector('.beverages').style.display = "none"
    gsap.from(document.querySelector('.salad'), { autoAlpha: 0, y: -50, duration: 0.8, delay: 0.3, ease: "power1.out" })
    e.preventDefault()
})

bev.addEventListener('click', (e) => {
    document.querySelector('.main-course').style.display = "none"
    document.querySelector('.salad').style.display = "none"
    document.querySelector('.beverages').style.display = "block"
    gsap.from(document.querySelector('.beverages'), { autoAlpha: 0, y: -50, duration: 0.8, delay: 0.3, ease: "power1.out" })
    e.preventDefault()
})
const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.spec-main')

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.target.dataset.id
        removeActiveClass()
        tab.classList.add('active-tab')
        const el = document.getElementById(id)
        el.classList.add('active')
        gsap.from(contents, { autoAlpha: 0, y: -30, duration: 0.8, delay: 0.2, ease: "power1.out" })
    })
})

function removeActiveClass() {
    tabs.forEach(tab => {
        tab.classList.remove('active-tab')
    })
    contents.forEach(content => {
        content.classList.remove('active')
    })
}
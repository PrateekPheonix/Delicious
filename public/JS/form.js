const form = document.querySelector('.form')
const modal = document.querySelector('.modal')
const container = document.querySelector('.modal-container')
const submit = document.querySelector('.submit-btn')
const okayBtn = document.querySelector('.modal-btn')

const isSubmitted = false

// Setting min date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", today);


//  Modal and form submission
form.addEventListener('submit', (e) => {
    modal.style.display = 'block'
    gsap.from(container, { autoAlpha: 0, y: 300, duration: 0.8, delay: 0.3, ease: "power1.out" })
    e.stopPropagation()
    console.log("form submitted")
})

// submit.addEventListener('click', (e) => {
//     modal.style.display = 'block'
//     gsap.from(container, { autoAlpha: 0, y: 300, duration: 0.8, delay: 0.3, ease: "power1.out" })
//     e.stopPropagation()
//     e.preventDefault()
// })

okayBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'none'
})

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
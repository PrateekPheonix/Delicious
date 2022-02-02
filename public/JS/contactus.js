const form = document.querySelector('.form')
const modal = document.querySelector('.modal')
const container = document.querySelector('.modal-container')
const okayBtn = document.querySelector('.modal-btn')

const showModal = () => {
    modal.style.display = 'block'
    gsap.from(container, { autoAlpha: 0, y: 300, duration: 0.8, delay: 0.3, ease: "power1.out" })
}

okayBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'none'
})

// AJAX from formSpree
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showModal()
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    console.log(data["errors"].map(error => error["message"]).join(", "))
                } else {
                    console.log("Oops! There was a problem submitting your form")
                }
            })
        }
    }).catch(error => {
        console.log("Oops! There was a problem submitting your form")
    });
}
form.addEventListener("submit", handleSubmit)
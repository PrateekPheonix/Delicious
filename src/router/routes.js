const express = require('express')
const path = require('path')
const sendEmail = require('../Utils/mail')

const router = new express.Router()


router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/about.html'))
})

router.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/menu.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/about.html'))
})

router.get('/specials', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/special.html'))
})

router.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/events.html'))
})

router.get('/chefs', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/chef.html'))
})

router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/gallery.html'))
})

router.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/review.html'))
})

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/contactUs.html'))
})

router.get('/booktable', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Pages/book.html'))
})

router.post('/sendemail', (req, res) => {
    const { name, email, phone, date, time, people, message } = req.body

    const from = "deliciousrestro@gmail.com"
    const to = email

    const subject = "Your table has been booked!"

    const output = `
    <h1>RESERVATION SUCCESSFUL</h1>
    <h2>Details</h2>
    <p>Your table has been booked in the name of <b>${name}</b> for <b>${people}</b> people. </p>
    <p>On <b>${date}</b> at <b>${time}</b> </p>
    `

    sendEmail(to, from, subject, output)

    // res.redirect('/booktable')
})


module.exports = router
const path = require('path')
const express = require('express')
const routes = require('./router/routes')

const app = express()

// Port setup
const port = process.env.PORT

// setting path for public directory
const publicDirectoryPath = path.join(__dirname, '../public')

//middleware
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({ extended: true }))

//seting up routes
app.use(routes)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
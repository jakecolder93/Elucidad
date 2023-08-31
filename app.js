const express = require("express"); 
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()

app.use(express.urlencoded({extended: false})) //adds user data from form submits to request object so req can be used to access it from req.body
app.use(express.json())

const router = require('./router')

//Set it so the express server displays ejs files
//Can't figure out how to display just .html
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

const server = require('http').createServer(app)

module.exports = server

require('dotenv').config()
require('express-router-group')
const express = require('express')
const router = express.Router()
const app = express()
const routes = require('./routes');
const session = require('express-session')


//  Connect all our routes to our application
module.exports = {
    initiate: () => {
        app.use(session({
            secret: process.env.APP_SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true }
        }))

        app.use('/', routes)
    },
    start: () => app.listen(process.env.APP_PORT, () => {
        console.log(`Example app listening at http://${process.env.APP_URL}:${process.env.APP_PORT}`)
    })
}
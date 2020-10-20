require('dotenv').config()
require('express-router-group')
const express = require('express')
const app = express()
const routes = require('./routes');

//  Connect all our routes to our application
module.exports = {
    initiate: () => {
        app.use('/', routes)
    },
    start: () => app.listen(process.env.APP_PORT, () => {
        console.log(`Example app listening at http://${process.env.APP_URL}:${process.env.APP_PORT}`)
    })
}

require('dotenv').config()
require('express-router-group')
const express = require('express')
const router = express.Router()
const app = express()
const routes = require('./routes');
const session = require('express-session')
const axios = require('axios');
const fs = require('fs')
const path = require('path')

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
    downloadAllNewProtofile: () => {
        // auth service
        downloadProto(process.env.PROTOBUF_AUTH_SERVICE_LINK, process.env.PROTOBUF_AUTH_SERVICE_LOCAL_PATH, process.env.PROTOBUF_AUTH_SERVICE_FIELNAME)
    },
    start: () => app.listen(process.env.APP_PORT, () => {
        console.log(`Example app listening at http://${process.env.APP_URL}:${process.env.APP_PORT}`)
    })
}

async function downloadProto(link, pathProtoLocal, nameProto) {
    const path = path.resolve(__dirname, pathProtoLocal, nameProto)
    const writer = fs.createWriteStream(path)

    const response = await axios({
        url: link,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}
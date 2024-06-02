const path = require('path')
const express = require('express')


const config = (app) => {
    console.log('hello', __dirname)
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src', 'public')))

}

module.exports = config
const path = require('path')
const express = require('express')

// Template Engines 
const config = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    
    // Static file 
    app.use(express.static(path.join('./src', 'public')))

}

module.exports = config
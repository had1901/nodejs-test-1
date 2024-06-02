const express = require('express')
const router = express.Router()

const { getHomePage, getAboutPage, postCreatePage } = require('../controller/homeController')



router.get('/', getHomePage)
router.get('/contact', getAboutPage)
router.post('/create', postCreatePage)

module.exports = router
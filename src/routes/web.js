const express = require('express')
const router = express.Router()

const { getHomePage, postCreatePage, postUpdatePage, postUpdateUser, postCreateUser, postDeleteUser, postRemoveUser } = require('../controller/homeController')



router.get('/', getHomePage)
router.get('/create', postCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update/:id', postUpdatePage)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postRemoveUser)

module.exports = router
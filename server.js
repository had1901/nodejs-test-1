const express = require('express')
require('dotenv').config()
const config = require('./src/config/vewEngine')
const webRoute = require('./src/routes/web')
const app = express()
const port = 8888


config(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('', webRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
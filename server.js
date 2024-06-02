const express = require('express')
const path = require('path')
require('dotenv').config()
const config = require('./src/config/vewEngine')
const webRoute = require('./src/routes/web')
const app = express()
const port = 8888
const connection = require('./src/config/database')


config(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('', webRoute)



connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log('results: ', results); // results contains rows returned by server
    // console.log('fields: ', fields); // fields contains extra meta data about results, if available
  }
);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
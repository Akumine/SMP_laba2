const express = require('express');
const app = express()

const router = require('./client.js');

app.use('/reques', router)

app.use('/', function(request, response) {
  response.send("Початкова сторінка");
})

module.exports = app;

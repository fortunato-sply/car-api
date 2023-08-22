const express = require('express');
const car = require('../routes/car');
const auth = require('../routes/auth');
const bodyParser = require('body-parser');

module.exports = function (app) {
  app
    .use(express.json())
    .use('/api/car', car)
    .use('/api/auth', auth)
    .use(bodyParser.json());
}
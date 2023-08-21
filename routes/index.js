const bodyParser = require('body-parser');
const car = require('./car');

module.exports = (app) => {
  app.use(
    bodyParser.json(), // vc esqueceu que json era uma função
    car
  )
}
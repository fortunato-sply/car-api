const mongoose = require('mongoose');

const Car = mongoose.model('Car', {
  brand: String,
  model: String,
  year: Number,
  fip: Number,
  color: String
})

module.exports = Car;
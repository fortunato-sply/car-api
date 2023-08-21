const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/carmanager';

module.exports = function() {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected to ${mongoose.connection.name}`));
}
const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router
  .post('/create', CarController.createCar)
  .get('/getcars', CarController.getCars)
  .put('/update', CarController.updateCar)
  .delete('/delete/:id?', CarController.deleteCar);

module.exports = router;
const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

router
  .post('/register', AuthController.register)
  .post('/login', AuthController.login)
  .delete('/delete/:id', AuthController.delete)
  .get('/', AuthController.get)

module.exports = router;
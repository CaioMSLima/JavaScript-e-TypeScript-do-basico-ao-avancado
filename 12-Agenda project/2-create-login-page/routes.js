const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController')
const LoginController = require('./src/controllers/LoginController')


//home routes
route.get('/', HomeController.index)

//login routes
route.get('/login/index', LoginController.index)


module.exports = route;
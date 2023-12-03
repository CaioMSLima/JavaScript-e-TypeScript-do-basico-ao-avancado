const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/HomeController')
const contactController = require('./src/controllers/ContactController')

//home routes
route.get('/', homeController.initialPage)
route.post('/', homeController.treatPost)

//contact routes
route.get('/contact',contactController.initialPage)
module.exports = route;
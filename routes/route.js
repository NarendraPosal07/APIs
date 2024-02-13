const express = require('express');
const routes = express();
const controllers = require('../controllers/controllers')


routes.get('/', controllers.defaulRoute)
routes.get('/country', controllers.country)
routes.get('/states', controllers.state)
routes.get('/city', controllers.city)


module.exports  = routes
const express = require('express');
const jumboMailController = require('../controller/jumboMailController');

const route = express.Router();

route.get('/', jumboMailController.jumboMail);

module.exports = route;
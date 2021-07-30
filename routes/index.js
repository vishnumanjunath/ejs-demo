const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

router.get('/products', mainController.getProducts);

router.get('/teams', mainController.getTeams);

router.get('/', mainController.getIndex);

module.exports = router;

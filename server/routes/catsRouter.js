const express = require('express');
const catsCtrl = require('../controllers/catsCtrl');
const catsRouter = express.Router();

catsRouter.get('/', catsCtrl.getCats);

catsRouter.post('/', catsCtrl.updateCats);

module.exports = catsRouter;

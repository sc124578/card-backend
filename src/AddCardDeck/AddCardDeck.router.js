const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const cardPackController = require('./AddCardDeck.controller');

router.get('/', cardPackController.getCardPack);

router.post('/', cardPackController.addCardPack);

router.delete('/:id', cardPackController.deleteCardPack);

module.exports = router;

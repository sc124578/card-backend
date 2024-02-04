const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const cardPackController = require('./AddCardDeck.controller');

router.get('/', cardPackController.getCardPack);

router.post('/', cardPackController.addCardPack);

router.delete('/deletePack/:id', cardPackController.deleteCardPack);

router.put('/:id', cardPackController.editCardPack);

module.exports = router;

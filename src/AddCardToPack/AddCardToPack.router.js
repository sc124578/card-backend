const express = require('express');
const router = express.Router();
const controller = require('./AddCardToPack.controller');

router.get('/:packId', controller.getCardToPack);
router.post('/:packId', controller.addCardToPack);
router.delete('/deletecard/:packId/:id', controller.deleteCardToPack);
router.put('/:packId/:cardId', controller.updateCardIsClicked);

module.exports = router;

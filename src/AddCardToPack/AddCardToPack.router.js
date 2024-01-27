const express = require('express');
const router = express.Router();
const controller = require('./AddCardToPack.controller');

router.get('/', controller.getCardToPack);
router.post('/', controller.addCardToPack);
router.delete('/:id', controller.deleteCardToPack);

module.exports = router;

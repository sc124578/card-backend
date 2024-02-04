const knex = require('knex')(require('../../knexfile').additionalDatabase);
const { addCardToPackToDatabase, getCardToPackFromDatabase, deleteCardToPackFromDatabase, cardIsClicked, getCardByIdFromDatabase } = require('./db');

const getCardToPack = async (req, res) => {
  try {
    const { packId } = req.params;
    const cards = await getCardToPackFromDatabase(packId);
    const cardsWithIsClicked = cards.map(card => ({
      ...card,
      isClicked: card.isClicked, 
    }));
    res.status(200).json(cardsWithIsClicked);
  } catch (error) {
    console.error(`error: Error fetching card to pack ${error}`);
    res.status(500).json({ error: error.message });
  }
};

const deleteCardToPack = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCard = await deleteCardToPackFromDatabase(id);
    res.status(200).json(deleteCard);
  } catch (error) {
    console.error(`error: Error deleting card to pack ${error}`);
    res.status(500).json({ error: error.message });
  }
};

const addCardToPack = async (req, res) => {
  try {
    const { packId } = req.params;
    const { cardName, cardNumber, cardImageURL } = req.body;
    const newCard = await addCardToPackToDatabase(packId, cardName, cardNumber, cardImageURL, 0);
    res.status(200).json(newCard);
  } catch (error) {
    console.error(`error: Error adding card to pack ${error}`);
    res.status(500).json({ error: error.message });
  }
};
const updateCardIsClicked = async (req, res) => {
  try {
    const { cardId } = req.params;
    const { isClicked } = req.body;

    const updatedCard = await cardIsClicked(cardId, isClicked);

    res.status(200).json({ success: true, updatedCard });
  } catch (error) {
    console.error(`error: Error updating card to pack ${error}`);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCardToPack,
  deleteCardToPack,
  addCardToPack,
  updateCardIsClicked,
};

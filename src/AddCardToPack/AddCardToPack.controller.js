const knex = require('knex')(require('../../knexfile').additionalDatabase);
const {addCardToPackToDatabase, getCardToPackFromDatabase, deleteCardToPackFromDatabase} = require('./db');

const getCardToPack = async (req, res) => {
    try {
        const cardToPack = await getCardToPackFromDatabase();
        res.status(200).json(cardToPack)
    } catch(error) {
        console.error(`error: Error fetching card to pack ${error}`)
        res.status(500).json({error: error.message})
    }
}

const deleteCardToPack = async (req, res) => {
    try {
        const {id} = req.params
        const deleteCard = await deleteCardToPackFromDatabase(id);
        res.status(200).json(deleteCard)
    } catch (error) {
        console.error(`error: Error deleting card to pack ${error}`)
        res.status(500).json({error: error.message});
    }
}

const addCardToPack = async (req, res) => {
    try {
        const {cardName, cardNumber, cardImageURL} = req.body;
        const newCard = await addCardToPackToDatabase(cardName, cardNumber, cardImageURL);
        res.status(200).json(newCard)
    } catch (error) {
        console.error(`error: Error adding card to pack ${error}`)
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getCardToPack,
    deleteCardToPack,
    addCardToPack
}
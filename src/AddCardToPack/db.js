const knex = require('knex')(require('../../knexfile').additionalDatabase);

const addCardToPackToDatabase = async (cardName, cardNumber, cardImageURL) => {
    return await knex('card_maker').insert({cardName, cardNumber, cardImageURL}).returning('*');
}

const getCardToPackFromDatabase = async () => {
    return await knex.select('*').from('card_maker');
}

const deleteCardToPackFromDatabase = async (id) => {
    return await knex('card_maker').where({id}).del().returning('*');
}

module.exports = {
    addCardToPackToDatabase,
    getCardToPackFromDatabase,
    deleteCardToPackFromDatabase
}
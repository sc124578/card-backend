const knex = require('knex')(require('../../knexfile').additionalDatabase);

const addCardToPackToDatabase = async (packId, cardName, cardNumber, cardImageURL, isClicked) => {
  return await knex('card_maker').insert({ packId, cardName, cardNumber, cardImageURL, isClicked }).returning('*');
};

const getCardByIdFromDatabase = async (id) => {
  return await knex.select('*').from('card_maker').where({ id }).first();
};

const getCardToPackFromDatabase = async (packId) => {
  return await knex.select('*').from('card_maker').where({ packId });
};

const deleteCardToPackFromDatabase = async (id) => {
  return await knex('card_maker').where({ id }).del().returning('*');
};

const cardIsClicked = async (id, isClicked) => {
  try {
    const query = knex('card_maker').where({ id }).update({ isClicked }).toString();

    await knex('card_maker').where({ id }).update({ isClicked });

    const updatedCard = await knex.select('*').from('card_maker').where({ id }).first();

    return updatedCard;
  } catch (error) {
    console.error('cardIsClicked - Error:', error);
    throw error; 
  }
};

module.exports = {
  addCardToPackToDatabase,
  getCardToPackFromDatabase,
  deleteCardToPackFromDatabase,
  cardIsClicked,
  getCardByIdFromDatabase
};
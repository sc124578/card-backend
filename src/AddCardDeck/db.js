const knex = require('knex')(require('../../knexfile').development);

const addCardPackToDatabase = async (creator, packType, packName, packImageURL) => {
    return await knex('pack_maker').insert({creator, packType, packName, packImageURL}).returning('*');
}
const getCardPackFromDatabase = async () => {
    return await knex.select('*').from('pack_maker');
}
const deleteCardPackFromDatabase = async (id) => {
    return await knex('pack_maker').where({id}).del().returning('*');
}

module.exports = {
    addCardPackToDatabase,
    getCardPackFromDatabase,
    deleteCardPackFromDatabase
}

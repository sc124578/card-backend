require('dotenv').config();
const knex = require('knex')(require('../../knexfile').development);
const {addCardPackToDatabase, getCardPackFromDatabase, deleteCardPackFromDatabase, editCardPackFromDatabase} = require('./db');


const getCardPack = async (req, res) => {
    try {
        const cardPack = await getCardPackFromDatabase();
        res.status(200).json(cardPack)
    } catch(error) {
        console.error(`error: Error fetching card packs ${error}`)
        res.status(500).json({error: error.message})
    }
}

const deleteCardPack = async (req, res) => {
    try {
        const {id} = req.params;
        const deletePack = await deleteCardPackFromDatabase(id);
        res.status(200).json(deletePack)
    } catch (error) {
        console.error(`error: Error deleting card pack ${error}`)
        res.status(500).json({error: error.message})
    }
}

const addCardPack = async (req, res) => {
    try {
        const {creator, packType, packName, packImageURL} = req.body;
        const newPack = await addCardPackToDatabase(creator, packType, packName, packImageURL);
        res.status(200).json(newPack)
    } catch (error) {
        console.error(`error: Error adding card pack ${error}`)
        res.status(500).json({error: error.message})
    }
}

const editCardPack = async (req, res) => {
    try {
        const {id} = req.params;
        const {creator, packType, packName, packImageURL} = req.body;
        const updatedPack = await editCardPackFromDatabase(id, creator, packType, packName, packImageURL);
        res.status(200).json(updatedPack)
    } catch (error) {
        console.error(`error: Error updating card pack ${error}`)
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    getCardPack,
    deleteCardPack,
    addCardPack,
    editCardPack
}
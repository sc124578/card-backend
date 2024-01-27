require('dotenv').config();
const {Pool} = require('pg')
const express = require('express');
const cardPackRouter = require('./AddCardDeck/AddCardDeck.router');
const cors = require('cors');
const addCardToPackRouter = require('./AddCardToPack/AddCardToPack.router');


const app = express();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 500000,
})

const additionalPool = new Pool({
    connectionString: process.env.ADDITIONAL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 500000,

})
app.set('db', pool);
app.set('additionalDb', additionalPool);
pool.connect()
app.use(cors())
app.use(express.json());
app.use('/api/packs', cardPackRouter);
app.use('/api/packs/:packId/cards', addCardToPackRouter);


module.exports = app;
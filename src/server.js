const PORT = process.env.PORT || 8080;
const express = require('express');
const app = require('./App.js');  // Assuming App.js exports an instance of Express

app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

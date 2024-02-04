const PORT = process.env.PORT || 10000;
const express = require('express');
const app = require('./App.js');  // Assuming App.js exports an instance of Express

app.use(express.json());

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

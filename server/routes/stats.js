const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const statsRouter = express.Router();

statsRouter.get('/table', async (req, res) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2023-2024`);
    const data = await response.json();
    res.status(200).send(data);
});

module.exports = { statsRouter };
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const gamesRouter = express.Router();

gamesRouter.get('/fixtures/:round', async (req, res) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${req.params.round}&s=2024-2025`);
    const data = await response.json();
    res.status(200).send(data);
});

gamesRouter.get('/results/:round', async (req, res) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${req.params.round}&s=2024-2025`);
    const data = await response.json();
    res.status(200).send(data);
});

module.exports = { gamesRouter };

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const highlightsRouter = express.Router();

highlightsRouter.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_HIGHLIGHTS_API_KEY,
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
    };

    const response = await fetch('https://free-football-soccer-videos.p.rapidapi.com/', options);
    const data = await response.json();
    res.status(200).send(data);
});

module.exports = { highlightsRouter };
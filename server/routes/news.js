const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
   const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news');
   const data = await response.json();
   res.status(200).send(data);
});

newsRouter.get('/article', async (req, res) => {
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&q=soccer&token=${process.env.REACT_APP_NEWS_API_KEY}`);
    const data = await response.json();
    res.status(200).send(data);
});

module.exports = { newsRouter };
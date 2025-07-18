import { Router } from 'express';
import { config } from 'dotenv';

config();

const newsRouter = Router();

newsRouter.get('/', async (req, res) => {
    try {
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news');

        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
        };

        const data = await response.json();
        res.status(200).send(data);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch news data' });
    }
});

newsRouter.get('/article', async (req, res) => {
    try {
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&q=football%20english%20premier%20league&token=${process.env.NEWS_API_KEY}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
        res.status(200).send(data);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch news data' });
    }
});

export default newsRouter;
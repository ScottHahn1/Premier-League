import { Router } from 'express';
import { config } from 'dotenv';

config();

const statsRouter = Router();

statsRouter.get('/table', async (req, res) => {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2024-2025`);

        if (!response.ok) {
            throw new Error(`Failed to fetch table stats: ${response.status} ${response.statusText}`);
        };

        const data = await response.json();
        res.status(200).send(data);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch stats data' });
    }
});

export default statsRouter;
import { Router } from 'express';
import { config } from 'dotenv';

config();

const teamsRouter = Router();

teamsRouter.get('/', async (req, res) => {
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch teams: ${response.status} ${response.statusText}`)
        }

        const data = await response.json();
        return res.status(200).send(data.teams);
    }  catch(err) {
        return res.status(500).json({ error: err.message });
    }
});

export default teamsRouter;
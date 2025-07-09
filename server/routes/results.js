import { Router } from 'express';
import { config } from 'dotenv';

config();

const resultsRouter = Router();

resultsRouter.get('/', async (req, res) => {
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/eventspastleague.php?id=4328');

        if (!response.ok) {
            throw new Error(`Failed to fetch results: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
        const round = data.events[0].intRound;

        res.status(200).send(round);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch fixtures data' });
    };
});


resultsRouter.get('/:round', async (req, res) => {
    try {
        const { round } = req.params;

        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/eventsround.php?id=4328&r=${round}&s=2024-2025`);

        if (!response.ok) {
            throw new Error(`Failed to fetch results: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();

        const shortenNames = {
            'Brighton and Hove Albion': 'Brighton',
            'Wolverhampton Wanderers': 'Wolves',
            'American Express Stadium': 'AMEX Stadium',
            'Brentford Community Stadium': 'Brentford Stadium',
            'Tottenham Hotspur Stadium': 'Tottenham Stadium',
        };

        const updatedResults = data.events.map(result => ({
                ...result,
                strHomeTeam: shortenNames[result.strHomeTeam] || result.strHomeTeam,
                strAwayTeam: shortenNames[result.strAwayTeam] || result.strAwayTeam,
                strVenue: shortenNames[result.strVenue] || result.strVenue
            })
        );

        let groupedResults = updatedResults.reduce(function (a, b) {
            a[b.dateEvent] = a[b.dateEvent] || [];
            a[b.dateEvent].push(b);
            return a;
        }, Object.create(null));

        let timeSortedResults = Object.values(groupedResults).map(result => {
            return result.sort((a, b) => a.strTime.localeCompare(b.strTime));
        });
        
        res.status(200).send(timeSortedResults);
    } catch(err) {
        return res.status(500).json({ error: 'Failed to fetch match results data' });
    }
});

export default resultsRouter;
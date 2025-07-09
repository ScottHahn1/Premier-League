import { Router } from 'express';
import { config } from 'dotenv';

config();

const fixturesRouter = Router();

fixturesRouter.get('/', async (req, res) => {
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4328');

        if (!response.ok) {
            throw new Error(`Failed to fetch fixtures: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
        const round = data.events[0].intRound;

        res.status(200).send(round);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch fixtures data' });
    }
});

fixturesRouter.get('/:round', async (req, res) => {
    try {
        const { round } = req.params;

        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/eventsround.php?id=4328&r=${round}&s=2025-2026`);

        if (!response.ok) {
            throw new Error(`Failed to fetch fixtures: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
 
        const shortenNames = {
            'Brighton and Hove Albion': 'Brighton',
            'Wolverhampton Wanderers': 'Wolves',
            'American Express Stadium': 'AMEX Stadium',
            'Brentford Community Stadium': 'Brentford Stadium',
            'Tottenham Hotspur Stadium': 'Tottenham Stadium',
        };

        const updatedFixtures = data.events.map(fixture => ({
                ...fixture,
                strHomeTeam: shortenNames[fixture.strHomeTeam] || fixture.strHomeTeam,
                strAwayTeam: shortenNames[fixture.strAwayTeam] || fixture.strAwayTeam,
                strVenue: shortenNames[fixture.strVenue] || fixture.strVenue
            })
        );

        const groupedFixtures = updatedFixtures.reduce(function (a, b) {
            a[b.dateEvent] = a[b.dateEvent] || [];
            a[b.dateEvent].push(b);
            return a;
        }, Object.create(null));

        const timeSortedFixtures = Object.values(groupedFixtures).map(fixture => {
            return fixture.sort((a, b) => a.strTime.localeCompare(b.strTime));
        });

        res.status(200).send(timeSortedFixtures);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch fixtures data' });
    }
});

export default fixturesRouter;
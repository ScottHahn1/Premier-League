const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const fixturesRouter = express.Router();

fixturesRouter.get('/', async (req, res) => {
    try {
        const allRoundsData = [];

        for (let round = 12; round <= 38; round++) {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${round}&s=2024-2025`);
            const data = await response.json();
            await data.events && allRoundsData.push(...data.events);
        }
 
        const fixtures = allRoundsData.filter(event => {
            return new Date(event.dateEvent).toISOString().slice(0, 10) >= new Date().toISOString().slice(0, 10);
        })

        let groupedFixtures = fixtures.reduce(function (a, b) {
            a[b.dateEvent] = a[b.dateEvent] || [];
            a[b.dateEvent].push(b);
            return a;
        }, Object.create(null));

        let timeSortedFixtures = Object.values(groupedFixtures).map(fixture => {
            return fixture.sort((a, b) => a.strTime.localeCompare(b.strTime));
        });
        
        res.status(200).send(timeSortedFixtures);
    }  catch(err) {
        return res.status(500).json({ error: 'Failed to fetch fixtures data' });
    }
});

module.exports = { fixturesRouter };
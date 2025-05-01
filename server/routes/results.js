const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const resultsRouter = express.Router();

resultsRouter.get('/', async (req, res) => {
    try {
        const allRoundsData = [];
        for (let round = 1; round <= 38; round++) {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${round}&s=2024-2025`);
            const data = await response.json();
            data.events && allRoundsData.push(...data.events);
        }
    
        const results = allRoundsData.filter(event => {
            return new Date(event.dateEvent).toISOString().slice(0, 10) <= new Date().toISOString().slice(0, 10);
        })

        let groupedResults = results.reduce(function (a, b) {
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

module.exports = { resultsRouter };
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const teamsRouter = express.Router();

teamsRouter.get('/', async (req, res) => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
    const data = await response.json();
    res.status(200).send(data);
});

module.exports = { teamsRouter };
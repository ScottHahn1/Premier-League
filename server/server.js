const express = require('express');
const cors = require('cors');
const { highlightsRouter } = require('./routes/highlights');
const dotenv = require('dotenv');
const { newsRouter } = require('./routes/news');
const { gamesRouter } = require('./routes/games');
const { statsRouter } = require('./routes/stats');
const { teamsRouter } = require('./routes/teams');

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: ['https://scotthahn1.github.io/Premier-League/'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET'],
    credentials: true,
}));

app.use('/highlights', highlightsRouter);
app.use('/news', newsRouter);
app.use('/games', gamesRouter);
app.use('/stats', statsRouter);
app.use('/teams', teamsRouter);

app.listen(PORT, () => console.log('Server started'));
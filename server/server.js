const express = require('express');
const cors = require('cors');
const { highlightsRouter } = require('./routes/highlights');
const dotenv = require('dotenv');
const { newsRouter } = require('./routes/news');
const { gamesRouter } = require('./routes/games');

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/highlights', highlightsRouter);
app.use('/news', newsRouter);
app.use('/games', gamesRouter);

app.listen(PORT, () => console.log('Server started'));
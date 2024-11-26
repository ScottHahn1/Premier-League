const express = require('express');
const cors = require('cors');
const { highlightsRouter } = require('./routes/highlights');
const dotenv = require('dotenv');
const { newsRouter } = require('./routes/news');
const { statsRouter } = require('./routes/stats');
const { teamsRouter } = require('./routes/teams');
const { fixturesRouter } = require('./routes/fixtures');
const { resultsRouter } = require('./routes/results');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8500;

app.use(express.json());
app.use(cors());

app.use('/highlights', highlightsRouter);
app.use('/news', newsRouter);
app.use('/fixtures', fixturesRouter);
app.use('/results', resultsRouter);
app.use('/stats', statsRouter);
app.use('/teams', teamsRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
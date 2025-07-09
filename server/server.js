import express, { json } from 'express';
import cors from 'cors';
import highlightsRouter from './routes/highlights.js';
import { config } from 'dotenv';
import newsRouter from './routes/news.js';
import statsRouter from './routes/stats.js';
import teamsRouter from './routes/teams.js';
import fixturesRouter from './routes/fixtures.js';
import resultsRouter from './routes/results.js';

config();
const app = express();

const PORT = process.env.PORT || 8500;

app.use(json());
app.use(cors());

app.use('/highlights', highlightsRouter);
app.use('/news', newsRouter);
app.use('/fixtures', fixturesRouter);
app.use('/results', resultsRouter);
app.use('/stats', statsRouter);
app.use('/teams', teamsRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
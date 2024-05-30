const express = require('express');
const cors = require('cors');
const { highlightsRouter } = require('./routes/highlights');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8500;

app.use(express.json());
app.use(cors());

app.use('/highlights', highlightsRouter);

app.listen(PORT, () => console.log('Server started'));
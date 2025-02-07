import express from 'express';
const app = express();
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
  connectDB();
});

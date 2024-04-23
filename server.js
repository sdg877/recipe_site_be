import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import userRoutes from './src/routes/users.js';
import './config/database.js';
import checkToken from './config/checkToken.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL);

app.use(checkToken);

app.get('/', (req, res) => {
  console.log('recipe');
  res.sendStatus(200);
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
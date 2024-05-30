import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import userRoutes from './src/routes/users.js';
import './config/database.js';
import checkToken from './config/checkToken.js';


const api = express();
const port = process.env.PORT || 3000;

api.use(cors());
api.use(bodyParser.json());
api.use(express.json())

mongoose.connect(process.env.DATABASE_URL);

api.use(checkToken);

api.get('/', (req, res) => {
  console.log('recipe');
  res.sendStatus(200);
});

api.use('/api/users', userRoutes);



api.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});

api.use("/api/", router )

export const handler = serverless(api)
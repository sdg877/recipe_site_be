// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

// import userRoutes from './src/routes/users.js';
// import './config/database.js';
// import checkToken from './config/checkToken.js';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect(process.env.DATABASE_URL);

// app.use(checkToken);

// app.get('/', (req, res) => {
//   console.log('recipe');
//   res.sendStatus(200);
// });

// app.use('/api/users', userRoutes);

// app.listen(port, () => {
//   console.log(`Server Listening at http://localhost:${port}`);
// });

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

import userRoutes from './src/routes/users.js';
import './config/database.js';
import checkToken from './config/checkToken.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Token check middleware
app.use(checkToken);

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.use('/api/users', userRoutes);

// Catchall handler to serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});


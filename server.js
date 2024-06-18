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
// app.use(express.json())

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
import path from 'path'; // Import path module

import userRoutes from './src/routes/users.js';
import './config/database.js';
import checkToken from './config/checkToken.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

app.use(checkToken);

app.get('/', (req, res) => {
  console.log('recipe');
  res.sendStatus(200);
});

app.use('/api/users', userRoutes);

// Serve static files from the build directory (assuming your frontend build output directory is 'build')
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all endpoint to redirect to your frontend URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});

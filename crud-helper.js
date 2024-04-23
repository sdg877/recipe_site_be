// Connect to the database
require('dotenv').config();
require('../config/database.js');

// Require the Mongoose models
const User = require('./src/models/user.js');
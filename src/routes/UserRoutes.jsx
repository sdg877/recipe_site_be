// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { login, logout, callback } = require('../controllers/authController');

// Define routes for authentication
router.get('/login', login); // Route to initiate Google login
router.get('/logout', logout); // Route to log out user
router.get('/callback', callback); // Route to handle Google callback

module.exports = router;

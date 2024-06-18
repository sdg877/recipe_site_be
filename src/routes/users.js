const express = require('express');
const { create, login, checkToken } = require('../controllers/users.js'); 
const ensureLoggedIn = require('../../config/ensureLoggedIn.js'); 
const router = express.Router();

router.get('/check-token', ensureLoggedIn, checkToken);

router.post('/', (req, res) => {
    console.log('Received POST request to /user');
    create(req, res); 
    console.log('Response sent for POST request to /user');
});

router.post('/login', login);

module.exports = router; 

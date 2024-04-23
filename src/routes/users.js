import express from 'express';
import { create, login, checkToken } from '../controllers/users.js';
import ensureLoggedIn from '../../config/ensureLoggedIn.js';

const router = express.Router();

router.get('/check-token', ensureLoggedIn, checkToken);

router.post('/', (req, res) => {
    console.log('Received POST request to /user');
    create(req, res); // Call the create function
    console.log('Response sent for POST request to /user');
  });


router.post('/login', login);
// router.put('/:id', update);

export default router;
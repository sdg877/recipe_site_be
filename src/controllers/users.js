import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const create = async (req, res) => {
    try {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // Assuming password hashing is done elsewhere
      });
  
      const savedUser = await newUser.save(); // Save the new user to the database
  
      // Send a success response with the created user data
      res.status(201).json(savedUser); // 201 Created status code
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' }); // 500 Internal Server Error
    }
  };

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error('User not found');

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error('Invalid password');

        res.json(createJWT(user));
    } catch (error) {
        console.error(error); 
        res.status(400).json({ error: 'Bad Credentials' });
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update user' });
    }
}

export default function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

export const checkToken = (req, res) => {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }
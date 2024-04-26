import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const create = async (req, res) => {
  try {
      const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password, 
      });

      const savedUser = await newUser.save();

      const token = createJWT(savedUser);

      res.status(201).json({ user: savedUser, token });
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
  }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error('User not found');
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error('Invalid password');
        const token = createJWT(user);
        res.json({ user, token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(400).json({ error: 'Bad Credentials' });
    }
};

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
    res.json(req.exp);
  }
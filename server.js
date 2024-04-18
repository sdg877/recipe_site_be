const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/user/login', async (req, res) => {
  const now = new Date();

  const User = mongoose.model('User'); // Define the User model here for simplicity

  try {
    const existingUser = await User.findOne({ userEmail: req.body.userEmail });

    if (!existingUser) {
      const newUser = new User({
        userEmail: req.body.userEmail,
        lastLogin: now,
        uniqueSub: req.body.uniqueSub
      });
      await newUser.save();
    } else {
      existingUser.lastLogin = now;
      existingUser.uniqueSub = req.body.uniqueSub;
      await existingUser.save();
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving user:', error);
    res.sendStatus(500);
  }
});

module.exports = app;

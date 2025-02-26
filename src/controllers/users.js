const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

exports.create = async (req, res) => {
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
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found");
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Invalid password");
    const token = createJWT(user);
    res.json({ user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ error: "Bad Credentials" });
  }
};

exports.checkToken = (req, res) => {
  res.json(req.exp);
};

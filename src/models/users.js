const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  // Add any additional fields you may need
});

// Define methods or statics for interacting with user data
// For example, finding a user by Google ID
userSchema.statics.findByGoogleId = async function(googleId) {
  return this.findOne({ googleId });
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

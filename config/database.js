// import mongoose from 'mongoose';

// console.log('DATABASE_URL:', process.env.DATABASE_URL); 

// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// export default mongoose;

const mongoose = require('mongoose');

console.log('DATABASE_URL:', process.env.DATABASE_URL); 

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = mongoose;

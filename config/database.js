// import mongoose from 'mongoose';

// mongoose.connect(process.env.DBURL);

// const db = mongoose.connection;

// db.on('connected', function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });

import mongoose from 'mongoose';

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Add this line to log the DATABASE_URL

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

export default mongoose;
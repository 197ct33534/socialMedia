import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import connectDB from './config/dbConn.js';

// Routes
const app = express();
connectDB();

// middleware

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);

mongoose.connection.once('open', () => {
  console.log('connect to mongodb.');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

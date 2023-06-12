const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const winston = require('winston');
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const redisClient = require('./redisClient');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Rate limiter configuration (1 request per 3 minutes)
const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 1,
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({ client: redisClient }),
}));
app.use(limiter);

// Routes
app.use('/auth', authRoutes);
app.use('/weather', weatherRoutes);

// Error logging with Winston
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./Models/db');
const authRoutes = require('./Routes/authRoutes');
const internshipRoutes = require('./Routes/internshipRoutes');
const path = require('path');

const app = express();

// Connect to MongoDB
connectDB();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middlewares
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies
app.use(cors({
  origin: process.env.CLIENT_ORIGIN, // Your frontend URL
  credentials: true, // Allow sending cookies
}));

// Test route
app.get('/ping', (req, res) => {
  res.send('PONG');
});

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/internship', internshipRoutes); // Internship routes

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

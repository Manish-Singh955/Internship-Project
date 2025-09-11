// backend/createAdmin.js
require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('./Models/db');
const User = require('./Models/User');

const adminEmail = process.env.ADMIN_EMAIL || 'manishkusingh35@gmail.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'Manish..';

const run = async () => {
  try {
    await connectDB();

    const existing = await User.findOne({ email: adminEmail });
    if (existing) {
      console.log('Admin user already exists:', existing.email);
      process.exit(0);
    }

    const hashed = await bcrypt.hash(adminPassword, 10);
    const admin = await User.create({
      name: 'Admin',
      email: adminEmail,
      password: hashed,
      role: 'admin'
    });

    console.log('Created admin:', admin.email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();

const express = require('express');
const { register, login, me, logout } = require('../Controllers/authController');
const { protect } = require('../Middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, me);
router.post('/logout', protect, logout);

module.exports = router;

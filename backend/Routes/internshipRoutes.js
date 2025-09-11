const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/upload');
const internshipController = require('../Controllers/internshipController');
const { protect } = require('../Middlewares/auth'); // your protect middleware

// Create internship (user must be logged in)
router.post('/create', protect, upload.single('offerLetter'), internshipController.createInternship);

// Get logged-in user's internships
router.get('/my', protect, internshipController.getUserInternships);

// Public: get all internships (list)
router.get('/all', internshipController.getAllInternships);

// Public: get one internship
router.get('/:id', internshipController.getInternshipById);

module.exports = router;

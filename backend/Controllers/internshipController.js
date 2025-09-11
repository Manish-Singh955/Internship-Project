// Controllers/internshipController.js
const Internship = require('../Models/Internship');

// Create internship
exports.createInternship = async (req, res) => {
  try {
    const {
      name,
      course,
      year,
      companyName,
      role,
      location,
      duration,
      internshipType,
      salary,
      feedback
    } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: 'Login required' });
    }

    // Normalize Windows paths for uploaded files
    const offerLetterPath = req.file ? req.file.path.replace(/\\/g, "/") : undefined;

    const internship = await Internship.create({
      user: req.user._id,
      name,
      course,
      year,
      companyName,
      role,
      location,
      duration,
      internshipType,
      salary,
      feedback,
      offerLetter: offerLetterPath
    });

    // Build public URL for frontend
    const offerLetterUrl = internship.offerLetter
      ? `${req.protocol}://${req.get("host")}/${internship.offerLetter}`
      : null;

    res.status(201).json({
      success: true,
      internship: { ...internship.toObject(), offerLetterUrl }
    });
  } catch (err) {
    console.error("createInternship error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get internships of logged-in user
exports.getUserInternships = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Login required" });
    }

    const internships = await Internship.find({ user: req.user._id }).sort({ createdAt: -1 });

    const mapped = internships.map((it) => ({
      ...it.toObject(),
      offerLetterUrl: it.offerLetter
        ? `${req.protocol}://${req.get("host")}/${it.offerLetter}`
        : null,
    }));

    res.json({ success: true, internships: mapped });
  } catch (err) {
    console.error("getUserInternships error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all internships (public)
exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    const mapped = internships.map((it) => ({
      _id: it._id,
      name: it.name,
      course: it.course,
      year: it.year,
      companyName: it.companyName,
      role: it.role,
      location: it.location,
      duration: it.duration,
      internshipType: it.internshipType,
      salary: it.salary,
      feedback: it.feedback,
      user: it.user,
      createdAt: it.createdAt,
      offerLetterUrl: it.offerLetter
        ? `${req.protocol}://${req.get("host")}/${it.offerLetter}`
        : null,
    }));

    res.json({ success: true, internships: mapped });
  } catch (err) {
    console.error("getAllInternships error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) Get single internship
exports.getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id).populate("user", "name email");

    if (!internship) return res.status(404).json({ message: "Internship not found" });

    res.json({
      success: true,
      internship: {
        ...internship.toObject(),
        offerLetterUrl: internship.offerLetter
          ? `${req.protocol}://${req.get("host")}/${internship.offerLetter}`
          : null,
      },
    });
  } catch (err) {
    console.error("getInternshipById error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

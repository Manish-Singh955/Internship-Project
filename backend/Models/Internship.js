const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InternshipSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',   // ✅ must match User.js model name
        required: true
    },
    name: { type: String, required: true },
    course: { type: String, enum: ['Btech', 'Mca', 'Mba'], required: true },
    year: { type: String, required: true },
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    internshipType: { type: String, enum: ['Paid', 'Unpaid'], required: true },
    salary: { type: String }, 
    offerLetter: { type: String },
    feedback: { type: String },
}, { timestamps: true });

// ✅ Model name should be "Internship", singular + capitalized
const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = Internship;

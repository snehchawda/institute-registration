const mongoose = require('mongoose');
const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    type:{
        type: String,
        enum: ["playhouse", "school", "college", "competitive_exam_center"],
        // required: true
    },
    board: {
        type: String,
        enum: ["GSEB", "CBSE", "ICSE", 'Other'],
        // required: true
    },
    medium:{
        type: String,
        enum: ["English", "Hindi", "Gujarati"]
    },
    classCategory:{
        type: String,
        enum: ["pre-primary", "primary", "secondary", "higher Secondary"]
    },
    standard: {
        type: String,
        enum: ['LKG', 'UKG', '1','2','3','4','5','6','7','8','9','10']
    },
    subjects: [String],
    university: String,
    degreeType: String,
    examType: String
});

module.exports = mongoose.model('Institute', instituteSchema);
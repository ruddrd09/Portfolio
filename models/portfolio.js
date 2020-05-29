const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    contactNo: Number,
    height: Number,
    weight: Number,
    dob: Date,
    address: String,
    images: [ Buffer ]  
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
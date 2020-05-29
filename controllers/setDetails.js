const mongoose = require('mongoose');
const Portfolio = require('../models/portfolio');

const setDetails = (req, res, next) => {
    const portfolio = new Portfolio({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNo: req.body.contactNo,
        height: req.body.height,
        weight: req.body.weight,
        dob: req.body.dob,
        address: req.body.address,
        images: req.body.imgs
    }, { versionKey: false });
    portfolio
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json(result);
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = setDetails;
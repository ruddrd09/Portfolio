const Portfolio = require('../models/portfolio');

const getDetails = (req, res, next) => {
    Portfolio.
    find({}).
    then(result => {
        console.log(result);
        res.status(200).json(result);
    }).
    catch(err => {
        console.log(err);
    })
}

module.exports = getDetails;
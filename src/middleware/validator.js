'use strict'

module.exports = (req, res, next) => { 
    if (!req.query) {
        next({'Error': 'No name provided'}); 
    } else{
        req.query = {name: 'jeff'}
        next();
    }
}; 
'use strict' 

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

const app = express(); 

app.use(logger);
// app.use((req,res, next) => {
//     console.log('this is the query request', req.query)
//     next();
// });

app.get('/person', validator, (req, res) => {
    res.send(req.query); 
})

app.use('*', notFoundHandler); 
app.use(errorHandler);

function start(port){
app.listen(port, () => console.log(`Server is up on port ${port}`))
} 

module.exports = {
    app: app,
    start: start
} 
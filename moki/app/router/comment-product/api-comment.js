var profile = require('../model/profile');

module.exports = function (app, db) { 
    require('./api-setComment')(app,profile);
    require('./api-getComment')(app,profile);
};
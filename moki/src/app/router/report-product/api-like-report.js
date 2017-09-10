var profile = require('../model/profile');

module.exports = function (app, db) { 
 require('./api-report-product')(app, profile);
};
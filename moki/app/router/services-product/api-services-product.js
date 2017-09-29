var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
   // require('./api-get-ship-from')(app,product);
    require('./api-get-list-sizes')(app,product);
    require('./api-get-list-brands')(app,product);
};
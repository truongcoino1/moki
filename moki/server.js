const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var cookieParser = require('cookie-parser');
const app            = express();
const port = 8000;
var jsonParser = bodyParser.json()
var mongoose = require('mongoose');
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
var logger = require('morgan');
var io = require('socket.io');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
var configDB = require('./config/database');

mongoose.connect(configDB.url); 
mongoose.Promise = global.Promise;
var dbMongo = mongoose.connection;
dbMongo.on('err', console.error.bind(console,'connect err'))
dbMongo.once("open", function(err, rs){
if(!err){
  console.log('mongodb connect');
} else{
  console.log('err');
}

});
var listen = app.listen(port, () => {
  console.log('We are live on ' + port);
});
var socket = io.listen(listen);
require('./app/router/product/api-product')(app,dbMongo);
require('./app/router/comment-product/api-comment')(app,dbMongo);
require('./app/router/like-report-product/api-like-report')(app,dbMongo);
require('./app/router/profile/api-profile')(app,dbMongo);
require('./app/router/services-product/api-services-product')(app,dbMongo);
require('./app/router/login/handing')(app,dbMongo);
require('./app/router/search/search')(app,dbMongo);
require('./app/router/follow/follow')(app,dbMongo);
require('./app/router/conversation/conversation')(app,dbMongo);
require('./app/router/address/address')(app,dbMongo);
require('./app/router/push-notification/push-notification')(app,socket);


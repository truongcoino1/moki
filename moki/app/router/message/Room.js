var mongoose = require('mongoose');


var Schema = new mongoose.Schema({ 
    roomID : String,
    listChat :[],
});

module.exports = mongoose.model('Room', Schema);
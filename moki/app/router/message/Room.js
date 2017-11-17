var mongoose = require('mongoose');


var Schema = new mongoose.Schema({ 
    roomID : String,
    listChat :[],
    listUser :[],
    id_product :String,
});

module.exports = mongoose.model('Room', Schema);
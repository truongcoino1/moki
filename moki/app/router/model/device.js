var mongoose = require('mongoose');


var Schema = new mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String,
	id_user : String,

});

module.exports = mongoose.model('device', Schema);
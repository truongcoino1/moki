var mongoose = require('mongoose');


var deviceSchema = new mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String

});

module.exports = mongoose.model('device', deviceSchema);
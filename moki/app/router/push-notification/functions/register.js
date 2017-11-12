var mongoose = require('mongoose');
var request = require('request');
var device = require('../models/device');
var constants = require('../constants/constants.json');


exports.register = function(deviceName,deviceId,registrationId,id_user,callback){


	var newDevice = new device({ 

		deviceName : deviceName,
		deviceId   : deviceId,
		registrationId : registrationId,
		id_user: id_user,
	});


	device.find({id_user : id_user}, function(err,devices){
		
		var totalDevices = devices.length;
		console.log(totalDevices);
		if (totalDevices == 0) {

			newDevice.save(function(err){

				if (!err) {

					callback(constants.success.msg_reg_success);

				} else {

					callback(constants.error.msg_reg_failure);

				}
			});
		} else {

			callback(constants.error.msg_reg_exists);

		}


	});

}
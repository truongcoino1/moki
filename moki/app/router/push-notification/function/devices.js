var mongoose = require('mongoose');
var request = require('request');
var device = require('../../model/device');
var constants = require('../function/constants');
exports.listDevices = function(callback) {

    device.find({}, {
        _id: false,
        __v: false
    }, function(err, devices) {

        if (!err) {

            callback(devices)

        }
    });
}
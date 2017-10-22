var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  from_id :String,
  to_id :String,
  message :String,
  product_id :String,
});
module.exports = mongoose.model('message', Schema);
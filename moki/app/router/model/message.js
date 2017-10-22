var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  id_message: String,
  from_id :String,
  to_id :String,
  message :String,
  product_id :String,
  unread :String,
});
module.exports = mongoose.model('message', Schema);
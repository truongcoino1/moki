var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  id_banner: String,
  name_banner :String,
  banner :String,
});
module.exports = mongoose.model('banner', Schema);
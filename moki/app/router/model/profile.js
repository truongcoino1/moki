var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  id_user: String,
  password: String,
  token: String,
  email: String,
  username: String,
  phonenumber: String,
  list_product: [],
  infor_user: {
    url: String,
    created: String,
    status: String,
    avatar: String,
    firstname: String,
    lastname: String,
    adddress: String,
    rates_lv1: String,
    rates_lv2: String,
    rates_lv3: String,
    listing_product: Number,
    followed: String,
    is_blocked: String,
    default_address: {
      adddress_id: String,
      adddress: String,
      pick_support: String,
    },
    online: Number,
  },
  list_like: [],
  list_search: [],
  list_following: [],
  list_chat: [],
  list_order_address: [],

});
module.exports = mongoose.model('profile', Schema);
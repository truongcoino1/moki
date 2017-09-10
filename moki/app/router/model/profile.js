var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  id_user: String,
  password: String,
  token: String,
  email: String,
  username: String,
  phonenumber: String,
  list_product: [{
    id_product: String,
    name_product: String,
    image: [
      {
        url: String,
        id: String,
      }],
    price: String,
    price_new: String,
    price_precent: String,
    described: String,
    ships_from: String,
    ships_from_id: String,
    condition: String,
    modified: String,
    created: String,
    like: Number,
    comment: [],
    is_like: String,
    best_offers: String,
    video: [{
      url: String,
      thumb: String,
    }],
    size: [{
      id: String,
      size_name: String
    }],
    brand: [{
      id: String,
      brand_name: String
    }],
    seller: {
      id_seller: String,
      username: String,
      avatar: String,
      score: String,
      listing: String,
    },
    category: [{
      id: String,
      name: String,
      has_brand: String,
      has_name: String
    }],
    state: String,
    is_blocked: String,
    can_edit: String,
    banned: String,
    can_buy: String,
    product_waiting_rate: String,
    seller_vacation_mode: String,
    offers: String,
    url_share: String,
    weight: String,
    dimention: {
      width: Number,
      height: Number,
      length: Number
    },
    list_report :[],
  }],
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
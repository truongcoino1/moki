var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id_user :String,
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
    product_size_id : Number,
    like: [],
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
});
module.exports = mongoose.model('product', Schema);
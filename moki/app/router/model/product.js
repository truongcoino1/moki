var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id_product: String,
    name_product: String,
    image: 
      {
        url: String,
        id: String,
      },
    price: String,
    price_precent: String,
    described: String,
    ships_from: String,
    ships_from_id: {
      province :String,
      district :String,
      ward :String,
    },
    condition: String,
    created: String,
    like: [],
    comment: [],
    video: {
      url: String,
      thumb: String,
    },
    size: {
      id_size: String,
      size_name: String
    },
    brand: {
      id_brand: String,
      brand_name: String
    },
    seller: {
      id_user :String,
      name: String,
      avatar: String,
      score: String,
      listing: String,
    },
    category: {
      category_id: String,
      name: String,
      has_brand: String,
      has_name: String
    },
    state: String,
    blocked: [],
    can_edit: [],
    banned: String,
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
var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 

  app.get('/api/profile', function(req, res){
    profile.find({token :"truong"}, function(err, result){
      if(result[0] != null){
        return res.json(result[0]);
      }
    })
  })
  app.post('/api/profile/create', function (req, res) {
    var newProfile = new profile();
    newProfile.id_user = "1";
    newProfile.password = "truong";
    newProfile.token = "quat";
    newProfile.email = "truongbk227@gmail.com";
    newProfile.username = "truongbk";
    newProfile.url= null,
    newProfile.created= null,
    newProfile.status= null,
    newProfile.avatar= null,
    newProfile.firstname= "Nguyễn Công",
    newProfile.lastname= "Trương",
    newProfile.adddress= "Thuận Thành Bắc Ninh",
    newProfile.phonenumber= "113",
    newProfile.list_product= null,
    newProfile.rates_lv1= null,
    newProfile.rates_lv2= null,
    newProfile.rates_lv3= null,
    newProfile.city= "Bắc Ninh",
    newProfile.listing_product= null,
    newProfile.followed= null,
    newProfile.is_blocked= null,
    newProfile.adddress_id= null,
    newProfile.address= null,
    newProfile.pick_support= null,
    newProfile.online= null,
    newProfile.list_like= null,
    newProfile.list_search= null,
    newProfile.list_following= null,
    newProfile.list_chat= null,
    newProfile.list_order_address= null,
    
    newProfile.save(function (err, profile) {
      if (err != null) {
        res.send(err);
        return null;
      }
      else {
        res.json(profile);
      }

    });
  });
  require('./api-getProduct')(app, product);
 require('./api-getListProduct')(app, product);
 require('./api-addProduct')(app, profile,product);
 require('./api-editProduct')(app, product);
 require('./api-delProduct')(app, product, profile);
};
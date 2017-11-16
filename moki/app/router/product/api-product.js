var profile = require('../model/profile');
var product = require('../model/product');
var device = require('../push-notification/models/device');



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
    newProfile.id_user = "3";
    newProfile.phonenumber = "0967897422";
    newProfile.password = "truong";
    newProfile.token = newProfile.phonenumber+"truong==ae";
    newProfile.email = "truongbk227truong@gmail.com";
    newProfile.username = "truongcoibk2";
    newProfile.url= null;
    newProfile.created= null;
    newProfile.status= null;
    newProfile.avatar= null;
    newProfile.firstname= "Nguyễn Công";
    newProfile.lastname= "Trương 2";
    newProfile.adddress= "Bắc Ninh";
    newProfile.rates_lv1 ="1";
    newProfile.rates_lv2 ="1";
    newProfile.rates_lv3 ="1";
    newProfile.city ="Hn";
    newProfile.is_blocked ="a";
    newProfile.default_address = null;
    newProfile.online ="0";
    
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
 require('./api-addProduct')(app, profile,product,device);
 require('./api-editProduct')(app, product);
 require('./api-delProduct')(app, product, profile);
 require('./api-getListProductByIDUser')(app, profile,product);
};
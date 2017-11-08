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
    newProfile.id_user = "2";
    newProfile.phonenumber = "0967897420";
    newProfile.password = "truong";
    newProfile.token = newProfile.phonenumber+"truong==ae";
    newProfile.email = "truongbk22aaa7@gmail.com";
    newProfile.username = "truongcoibk";
    
      newProfile.url= null,
      newProfile.created= null,
      newProfile.status= null,
      newProfile.avatar= null,
      newProfile.firstname= "Nguyễn Công",
      newProfile.lastname= "Trương",
      newProfile.adddress= "Bắc Ninh",
    
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
};
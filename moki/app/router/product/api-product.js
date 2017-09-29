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
 require('./api-addProduct')(app, profile,product);
 require('./api-editProduct')(app, product);
 require('./api-delProduct')(app, product, profile);
};
var profile = require('../model/profile');



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
    newProfile.token = "truong";
    newProfile.email = "truongbk227@gmail.com";
    newProfile.username = "truongbk";
    newProfile.infor_user = {
      url: null,
      created: null,
      status: null,
      avatar: null,
      firstname: "Nguyễn Công",
      lastname: "Trương",
      adddress: "Bắc Ninh",
    }
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
  require('./api-getProduct')(app, profile);
 require('./api-getListProduct')(app, profile);
 require('./api-addProduct')(app, profile);
 require('./api-editProduct')(app, profile);
 require('./api-delProduct')(app, profile);
};
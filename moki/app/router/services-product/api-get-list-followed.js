

module.exports = function(app,profile ){
  app.post('/profile/get_list_followed', (req, res) => {
    let profile_by_id = require('../../controller/profile/function-profile').get_profile_by_id(profile,req);
    let profile_by_token = require('../../controller/profile/function-profile').get_profile_by_token(profile,req);
    if(profile_by_id !== null){
      result = {
        code :1000,
        message :"OK",
        data :profile_by_id.followed,
      }
      return res.json(result);
    } else{
      let result = {
        code :9995,
        message :"User is not validated.",
      }
      return res.json(result);
    }  
    });
}
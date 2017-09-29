

module.exports = function (app, profile) {
  app.post('/profile/get_profile', (req, res) => {
    let profile = require('../../controller/profile/function-profile').get_profile_by_id(profile, req);
    if (profile != null) {
      let result = {
        code: 1000,
        message: "OK",
        data: profile,
      }
      return res.json(result);
    }else{
      let result = {
        code: 9995,
        message: "User is not validated.",
      }
      return res.json(result);
    }
  });
}
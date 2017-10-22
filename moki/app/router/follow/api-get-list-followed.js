
module.exports = function (app, profile) {
  app.post('/profile/get_list_followed', (req, res) => {
    profile.find({ token: req.body.token }, (err, rs) => {

      if (rs.length != 0) {
        profile.find({ id_user: req.body.id_user }, (err1, rs1) => {
          if (!err1) {
            let list_follow = rs1[0].followed;
            let followed = 0;
            for (var i = 0; i < rs1[0].followed.length; i++) {
              if (rs[0].id_user === rs1[0].followed[i].id_user) {
                followed = 1;
              }
            }
            let result = {
              code: 1000,
              message: "OK",
              data: {
                list_follow: list_follow,
                followed: followed,
              }
            }
            return res.json(result);
          }
        });
      } else {
        let result = {
          code: 9992,
          message: "Profile is not existed.",
        }
        return res.json(result)
      }
     
    })
  });
}
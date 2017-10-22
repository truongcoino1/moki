
module.exports = function (app, profile) {
    app.post('/profile/get_list_following', (req, res) => {
      profile.find({ token: req.body.token }, (err, rs) => {
  
        if (rs.length != 0) {
          profile.find({ id_user: req.body.id_user }, (err1, rs1) => {
            if (!err1) {
              let list_follow = rs1[0].list_following;
              let following = 0;
              for (var i = 0; i < rs1[0].list_following.length; i++) {
                if (rs[0].id_user === rs1[0].list_following[i].id_user) {
                  following = 1;
                }
              }
              let result = {
                code: 1000,
                message: "OK",
                data: {
                  list_follow: list_follow,
                  followed: following,
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
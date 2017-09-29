
module.exports = function(app,profile ){
    app.post('/profile/set_profile', (req, res) => {
      profile.find({ token: req.body.token }, (err, rs) => {
        if (rs.length != 0) {
          rs[0].username = req.body.username,
            rs[0].email = req.body.email,
            rs[0].status = req.body.status,
            rs[0].avatar = req.body.avatar,
            rs[0].firstname = req.body.firstname,
            rs[0].lastname = req.body.lastname,
            rs[0].address = req.body.address,
            rs[0].city = req.body.city,
            rs[0].password = req.body.password,
            rs.save(function (err, post) {
              if (!err) {
                result = {
                  code: 1000,
                  message: "OK",
                  data: rs[0].avatar,
                }
                return res.json(result);
              } else {
                result = {
                  code: 404,
                  message: err,
  
                }
                return res.json(result);
              }
            })
  
        }
        else {
          let result = {
            code: 9992,
            message: "Product is not existed",
          }
          return res.json(result);
        }
  
      })
      });
}
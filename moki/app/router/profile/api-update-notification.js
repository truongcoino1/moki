

module.exports = function (app, profile) {
    app.post('/profile/update_notification', (req, res) => {
      profile.find({ id_user: req.body.id_user }, (err, rs) => {
        if (rs.length != 0) {
        let list_notification = rs[0].list_notification;
        for(var i =0; i < list_notification.length; i++){
            if(list_notification[i].id === req.body.id_notification){
                rs[0].list_notification[i].view = "1";
            }
        }
        rs[0].save((e,r)=>{

        });
          let result = {
            code: 1000,
            message: "OK",
            data: rs[0],
          }
          return res.json(result);
        }
        else {
          let result = {
            code: 9995,
            message: "User is not validated.",
          }
          return res.json(result);
        }
  
      });
  });
  }
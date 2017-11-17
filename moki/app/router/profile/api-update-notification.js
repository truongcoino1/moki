

module.exports = function (app, profile) {
    app.post('/profile/update_notification', (req, res) => {
      profile.find({ id_user: req.body.id_user }, (err, rs) => {
        if (rs.length != 0) {
        let list_notification = rs[0].list_notification;
        for(var i =0; i < list_notification.length; i++){
            if(list_notification[i].id.toString() === req.body.id_notification){
              let noti = list_notification[i];
               rs[0].list_notification.splice(i,1);
              noti.view ='1';
               rs[0].list_notification.push(noti);
               rs[0].list_notification.sort(function(a, b){return a.id-b.id});
            }
        }
        rs[0].save(function(err, post){
          if(!err){
            let result = {
              code: 1000,
              message: "OK",
              data: rs[0],
            }
            return res.json(result);
          }
        });
          
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
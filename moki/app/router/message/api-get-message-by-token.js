var Room = require('./Room');


module.exports = function (app, profile) {
    app.post('/profile/get_message', (req, res) => {
      profile.find({ token: req.body.token }, (err, rs) => {  
        if (rs.length != 0) {
            let list_chat = rs[0].list_chat;
            for(var i =0; i < list_chat.length; i++){
                Room.find({roomID : list_chat[i]},(e,r)=>{
                    if(r.length >0){
                        let id_user = (rs[0].id_user == r[0].listUser[0]) ? r[0].listUser[1] : r[0].listUser[0];
                        let id_product = r[0].id_product;
                        let ms= null;
                        if(r[0].listChat >0){
                            ms = r[0].listChat[r[0].listChat-1];
                        } 
                        let result = {
                            id_user : id_user,
                            id_product :id_product,
                            message : ms,
                        }
                        return res.json(result)
                    }
                })
            }
            let result = {
                id_user : null,
                id_product :null,
                message : null,
            }
            return res.json(result)

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
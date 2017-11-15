

var sendFunction = require('../push-notification/functions/send-message');

module.exports = function (app, profile,device) {
    app.post('/profile/set_follow', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            console.log(rs);
            if (rs.length != 0) {
                profile.find({ id_user: req.body.id_user }, (err1, rs1) => {
                    if (!err1) {
                        let change =0;
                        for(var i =0; i < rs[0].list_following.length; i++){
                            if(rs[0].list_following[i].id_user === req.body.id_user){
                                change =1;
                            }
                        }
                        if(change === 0){
                            let e_following = {
                                id_user: rs1[0].id_user,
                                name: rs1[0].lastname,
                                avatar: rs1[0].avatar,
                            }
                            rs[0].list_following.push(e_following);
                            let e_followed = {
                                id_user: rs[0].id_user,
                                name: rs[0].lastname,
                                avatar: rs[0].avatar,
                            } 
                            rs1[0].followed.push(e_followed);
                            rs[0].save(function (err, post) {
                            });
                            rs1[0].save(function (err, post) {
                              
                            });
                            let result = {
                                code: 1000,
                                message: "OK",
                            }
                            let message ={
                                message:rs[0].username +" đã follow bạn",
                                url: rs[0].avatar,
                                view:"0",
                              }

                            device.find({id_user : req.body.id_user},(err, rs2)=>{
                                console.log(rs2);
                                if(rs1.length >0){
                                  for(var j =0; j < rs2.length; j++){
                                    sendFunction.sendMessage(message,rs2[j].registrationId,function(result){                  
                                    });
                                  }
                                  rs1[0].list_notification.push(message);
                                  rs1[0].save((err, pro)=>{
            
                                  });
                                }
                              })
                            return res.json(result);
                        } else{
                            for(var i =0; i < rs[0].list_following.length; i++){
                                if(rs[0].list_following[i].id_user === req.body.id_user){
                                    rs[0].list_following.splice(i,1);
                                }
                            }
                            for(var i =0; i < rs1[0].followed.length; i++){
                                if(rs1[0].followed[i].id_user === rs[0].id_user){
                                    rs1[0].followed.splice(i,1);
                                }
                            }
                            rs[0].save(function (err, post) {
                            });
                            rs1[0].save(function (err, post) {
                              
                            });
                            let result = {
                                code: 1000,
                                message: "OK",
                            }
                            return res.json(result);
                        }
                    }
                    
                });
            } else {
              let  result = {
                    code: 9992,
                    message: "Profile is not existed.",
                }
                return res.json(result);
            }
          
        })
    });
}
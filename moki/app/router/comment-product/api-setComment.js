var convert = require('../Convert');
var sendFunction = require('../push-notification/functions/send-message');

var moment = require('moment');
module.exports = function (app, profile, product) {
    app.post('/profile/set_comment', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                        let poster = {
                            id: rs[0].id_user,
                            name: rs[0].username,
                            avatar: rs[0].avatar,
                        }
                        let m = moment();
                        let comment = {
                            comment: req.body.comment,
                            index: req.body.index,
                            count: req.body.count,
                            poster: poster,
                            time : m,
                        }
                     product.find({id_product :req.body.id_product},(err1, rs1) =>{
                        if(rs1.length !=0){

                            rs1[0].comment.push(comment);
                            rs1[0].save(function (err, product) {
                                if (err != null) {
                                  res.send(err);
                                  return null;
                                }
                                else {
                                    let result = {
                                        code: 1000,
                                        message: "OK.",
                                        data :comment,
                                    }
                                    device.find({id_user : rs[0].id_user},(err, rs2)=>{
                                        console.log(rs1);
                                        if(rs1.length >0){
                                          for(var j =0; j < rs2.length; j++){
                                            sendFunction.sendMessage("Có comment mới",rs2[j].registrationId,function(result){                  
                                            });
                                          }
                                        }
                                      })
                                    return res.json(result);
                                }
                      
                              });
                        } else {
                            let result = {
                                code: 9992,
                                message: "Product is not existed.",
                            }
                            return res.json(result);
                        }
            
                     })
            }
            else {
                let result = {
                    code: 9995,
                    message: "User is not validated.",
                }
                return res.json(result);
            }

        })
    });
}
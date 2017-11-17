var convert = require('../Convert');
var sendFunction = require('../push-notification/functions/send-message');

var moment = require('moment');
module.exports = function (app, profile, product, device) {
    app.post('/profile/set_comment', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                let poster = {
                    id_user: rs[0].id_user,
                    name: rs[0].username,
                    avatar: rs[0].avatar,
                }
                let m = moment();
                let comment = {
                    comment: req.body.comment,
                    index: req.body.index,
                    count: req.body.count,
                    poster: poster,
                    time: m.toString(),
                }
                product.find({ id_product: req.body.id_product }, (err1, rs1) => {

                    if (rs1.length != 0) {
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
                                    data: comment,
                                }

                                device.find({ id_user: req.body.id_user_product }, (err, rs2) => {
                                    //console.log(rs2);
                                    if (rs2.length > 0) {
                                        let m1 = moment();
                                        let message = {
                                            id: rs[0].list_notification.length,
                                            message: rs[0].username + " đã bình luận về sản phẩm " + rs1[0].name_product,
                                            url: rs[0].avatar,
                                            view: "0",
                                            id_product:rs1[0].id_product,
                                            time :m1.toString(),
                                        }

                                        for (var j = 0; j < rs2.length; j++) {
                                            sendFunction.sendMessage(message, rs2[j].registrationId, function (result) {
                                            });
                                        }
                                        profile.find({ id_user: req.body.id_user_product }, (err, rs4) => {
                                            if (rs4.length > 0) {
                                                rs4[0].list_notification.push(message);
                                                rs4[0].save((e, r) => {

                                                })
                                            }
                                        });

                                    }
                                });
                                let list_id = [];

                                for (var i = 0; i < rs1[0].comment.length; i++) {

                                    list_id.push(rs1[0].comment[i].poster.id_user);

                                }
                                for (var i = 0; i < list_id.length - 1; i++) {
                                    for (var j = i + 1; j < list_id.length; j++) {
                                        if (list_id[i] === list_id[j]) {
                                            list_id[j] = list_id[j + 1];
                                            list_id.length--;
                                            i--;
                                        }
                                    }
                                }

                                for (var i = 0; i < list_id.length; i++) {                                 
                                    if(list_id[i] !== rs[0].id_user){
                                       // console.log(list_id[i]);
                                        device.find({ id_user: list_id[i] }, (e1, r1) => {
                                            if (r1.length > 0) {
                                                profile.find({ id_user: req.body.id_user_product }, (e, r) => {
                                                    if(r.length >0){
                                                        let m1 = moment();
                                                        let message = {
                                                            id: rs[0].list_notification.length,
                                                            message: rs[0].username + " cũng đã bình luận về sản phẩm " + rs1[0].name_product + "của " + r[0].username,
                                                            url: rs[0].avatar,
                                                            view: "0",
                                                            id_product:rs1[0].id_product,
                                                            time :m1.toString(),
                                                        }
                                                        sendFunction.sendMessage(message, r1[0].registrationId, function (result) {
                                                        });
                                                    }
                                                })
    
                                            }
                                        });
                                       console.log(rs[0].username);
                                        profile.find({ id_user: list_id[i] }, (e2, r2) => {
                                            if (r2.length > 0) {
                                                profile.find({ id_user: req.body.id_user_product }, (e, r) => {
                                                    if(r.length >0){
                                                        let m1 = moment();
                                                        let message = {
                                                            id: rs[0].list_notification.length,
                                                            message: rs[0].username + " cũng đã bình luận về sản phẩm " + rs1[0].name_product + "của " + r[0].username,
                                                            url: rs[0].avatar,
                                                            view: "0",
                                                            id_product:rs1[0].id_product,
                                                            time :m1.toString(),
                                                        }
                                                        r2[0].list_notification.push(message);
                                                        r2[0].save((e3, r3) => {
            
                                                        })
                                                    }
                                                })
                                         
                                            }
                                        })
                                    }
                                }
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
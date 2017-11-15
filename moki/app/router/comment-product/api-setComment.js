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
                                    console.log(rs2);
                                    if (rs2.length > 0) {
                                        let message = {
                                            id: rs[0].list_notification.length,
                                            message: rs[0].username + "Đã bình luận về sản phẩm " + rs1[0].name_product,
                                            url: rs[0].avatar,
                                            view: "0",
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
                                for (var i = 0; i < rs1[0].comment.length; i++) {
                                    if (rs1[0].comment[i].poster.id_user !== rs[0].id_user) {
                                        device.find({ id_user: rs1[0].comment[i].poster.id_user }, (err, rs2) => {

                                            if (rs2.length > 0) {

                                                profile.find({ id_user: req.body.id_user_product }, (err, rs3) => {
                                                    if (rs3.length > 0) {
                                                        let message = {
                                                            id: rs[0].list_notification.length,
                                                            message: rs[0].username + " cũng đã bình luận trong " + rs1[0].name_product + " của " + rs3[0].username,
                                                            url: rs[0].avatar,
                                                            view: "0",
                                                        }
                                                        sendFunction.sendMessage(message, rs2[j].registrationId, function (result) {
                                                        });
                                                        profile.find({ id_user: rs1[0].comment[i].poster.id_user }, (err, rs4) => {
                                                            if (rs4.length > 0) {
                                                                rs4[0].list_notification.push(message);
                                                                rs4[0].save((e, r) => {

                                                                })
                                                            }
                                                        });
                                                    }
                                                })

                                            }
                                        });
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
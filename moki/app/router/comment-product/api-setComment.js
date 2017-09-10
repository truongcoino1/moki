


module.exports = function (app, profile) {
    app.post('/profile/set_comment', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                let result = null;
                for (var i = 0; i < rs[0].list_product.length; i++) {
                    if (rs[0].list_product[i].id_product === req.body.id_product) {
                        console.log("truong vao day")
                        let poster = {
                            id: rs[0].id_user,
                            name: rs[0].infor_user.firstname + " " + rs[0].infor_user.lastname,
                            avatar: rs[0].infor_user.avatar,
                        }
                        let comment = {
                            comment: req.body.comment,
                            index: req.body.index,
                            count: req.body.console,
                            poster: poster,
                        }
                        rs[0].list_product[i].comment.push(comment);
                        rs[0].save((err, post) => {
                            if (err) {
                                result = {
                                    code: 404,
                                    message: err,
                                }
                            } else {
                                result = {
                                    code: 1000,
                                    message: "OK",
                                }
                            }
                        });
                        result = {
                            code: 1000,
                            message: "OK",
                        }
                        return res.json(result);

                    } else {
                        result = {
                            code: 9992,
                            message: "Product is not existed",
                        }
                        break;
                    }
                }
                console.log("truongcoi")
                return res.json(result);
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
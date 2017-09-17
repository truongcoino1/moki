module.exports = function (app, product, profile) {
    app.post('/profile/del_product', (req, res) => {
        product.find({ id_product: req.body.id_product }, (err, rs) => {
            console.log(rs)
            if (rs.length != 0) {
                rs[0].remove();
                profile.find({ token: req.body.token }, (err1, rs1) => {
                    if (rs1.length != 0) {
                        for (var i = 0; i < rs1[0].list_product.length; i++) {
                            if (rs1[0].list_product[i] === req.body.id_product) {
                                rs1[0].list_product.splice(i, 1);
                                break;
                            }
                        }
                        rs1[0].save((err, post) => {
                            if (err) {
                                let result = {
                                    code: 404,
                                    message: err,
                                }
                                return res.json(result);
                            } else {
                                let result = {
                                    code: 1000,
                                    message: "OK",
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

                })
            }
            else {
                let result = {
                    code: 9992,
                    message: "Product is not existed.",
                }
                return res.json(result);
            }

        })
    });
}
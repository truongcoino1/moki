module.exports = function (app, profile) {
    app.post('/profile/del_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                var result = null;
                console.log(req.body.name_product);
                for (var i = 0; i < rs[0].list_product.length; i++) {
                    if (rs[0].list_product[i].id_product === req.body.id_product) {
                        console.log("truong vao")
                        rs[0].list_product.splice(i, 1);
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
                        } ;           
                        break;
                    } else {
                        result = {
                            code: 9992,
                            message: "Product is not existed",
                        }
                        break;
                    }
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

        })
    });
}
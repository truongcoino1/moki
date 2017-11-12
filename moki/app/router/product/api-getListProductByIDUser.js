

module.exports = function (app, profile, product) {
    app.post('/get_list_product_byID', (req, res) => {
        profile.find({ id_user: req.body.id_user }, (err, rs) => {
            if (rs.length != 0) {

                let listProduct = [];
                for (var i = 0; i < rs[0].list_product.length; i++) {
                    product.find({ id_product: rs[0].list_product[i] }, (err, rs1) => {
                        if (rs1.length > 0) {

                            listProduct.push(rs1[0]);
                        }
                        if (listProduct.length === rs[0].list_product.length) {
                            let result = {
                                code: 1000,
                                message: "OK",
                                data: listProduct,
                            }
                            return res.json(result);
                        }

                    });
                }


            }
            else {
                let result = {
                    code: 9992,
                    message: "Product is not existed",
                }
                return res.json(result);
            }

        })
    });
}
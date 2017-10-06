// JavaScript source code
module.exports = function (app, product, profile,SearchInfo, brand) {
    app.post('/product/save_search', (req, res) => {
        product.find({
            keyword: req.body.keyword,
            brand_id: req.body.brand_id,
            category_id: req.body.category_id,
            product_size_id: req.body.product_size_id,
            price_min: req.body.price_min,
            price_max: req.body.price_max,
            condition: req.body.condition
        }, (err, rs) => {
            if (rs.length != 0) {
                profile.find({ token: req.body.token }, (err1, rs1) => {
                    if (rs1.length != 0) {
                        rs1[0].save((err, post) => {
                            if (err) {
                                let result = {
                                    code: 404,
                                    message: err,
                                }
                                return res.json(result);
                            } else {
                                let newSearchInfo = new SearchInfo();
                                newSearchInfo.id_search = rs1[0].list_search.length + 1;
                                newSearchInfo.keyword = keyword,
                                    newSearchInfo.category = {
                                        category_id= category_id,
                                        name = rs[0].category.name,
                                    }
                                     newSearchInfo.brand= {
                                    id_brand= brand_id,
                                    brand_name = rs[0].brand.brand_name,
                                    },
                                         newSearchInfo.size = {
                                         id_size= product_size_id,
                                         size_name= rs[0].size.name,
                                    },
                                    prince_min = price_min,
                                    prince_max = price_max,
                                    condition = condition,
                                newSearchInfo.save(function (err, SearchInfo) {
                                });
                                rs1[0].list_search.push(newSearchInfo.id_product);
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
                    message: "product is not existed",
                }
                return res.json(result);
            }





        })




     });

}


module.exports = function (app, profile) {
    app.post('/product/save_search_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.lenght !== 0) {
                let result = {
                    id :  rs[0].list_search.lenght,
                    keyword : req.body.keyword,
                    category: { category_id: req.body.category_id },
                    brand: { brand_name: req.body.brand_name },
                    size: { size_name: req.body.size_name },
                    price: req.body.price,
                    condition: req.body.condition
                };
                rs[0].list_search.push(result);
                rs[0].save(function (err, post) {
                    if (err) {
                        let result = {
                            code: 404,
                            message: err
                        }
                        return res.json(result);
                    }
                    let result = {
                        code: 1000,
                        message: "OK",
                    }
                    return res.json(result);

                });
            }
        })
    });
}



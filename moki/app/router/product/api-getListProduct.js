
module.exports = function (app, product) {
    app.post('/get_list_product', (req, res) => {
        product.find({ "category.category_id": req.body.category_id }, (err, rs) => {
            var last_id;
            var index = parseInt(2);
            var count = 2;
            var listProduct = [];




            if (rs.length != 0) {

                //1   i<3   
                for (var i = index; i < index + count; i++) {

                    listProduct[i - index] = rs[i];
                    if (i == (index + count - 1)) {
                        last_id = listProduct[i - index].id_product;
                    }

                };





                let result = null;
                result = {
                    code: 1000,
                    message: "OK",
                    data: listProduct,
                    last_id: last_id,
                }
                return res.json(result)








            }





            else {
                result = {
                    code: 9992,
                    message: "Product is not existed.",
                }
            }
            return res.json(result)
        })
    });
}
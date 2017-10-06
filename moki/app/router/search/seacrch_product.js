module.exports = function (app, product) {
    app.post('/product/search_product', (req, res) => {
        product.find({
            id_product: req.body.id_product,
            // category_id: rep.body.category_id,
           // brand_id: req.body.brand_id, product_size_id: req.body.product_size_id,
           // condition: req.body.condition,
        }, (err, rs) => {
            if (rs.length != 0) {

               // let arr = rs;
              //  for (var i = 0; i < arr.length; i++) {
               //     if (arr[i].price > req.body.price_min && arr[i].price < req.body.price_max) {

                 //   } else {
                 //       arr.splice(i, 1);
                  //  }
                //}
                let result = {
                    code: 1000,
                    message: "OK",
                   // product: arr,
                }

                return res.json(result);

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
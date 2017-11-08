module.exports = function (app, product) {
    app.post('/get_list_product', (req, res) => {
        product.find({ "category.category_id": req.body.category_id }, (err, rs) => { 

            if (rs.length != 0) {
             if(rs.length > 20){
                   if(req.body.index === 0){
                    console.log("vao")
                    let listProduct =[];
                    let lastID = null;
                    for(var i =0; i < 20; i++){
                        listProduct.push(rs[i]);
                        lastID = rs[i].id_product;
                    }

               let result = {
                    code: 1000,
                    message: "OK",
                    data: listProduct,
                    last_id: lastID,
                }
                return res.json(result)

                } else{
                    let count =0;
                    let listProduct =[];
                    let lastID = null;
                    for(var i =0; i < rs.length; i++){
                        if(rs[i].id_product === req.body.last_id){
                            count = i+1;
                        }
                    }
                    if(rs.length -count >= 20){
                        for(var i =count; i < count +20; i++){
                        listProduct.push(rs[i]);
                        lastID = rs[i].id_product;
                        }
                    } else{
                        for(var i =count; i < rs.length; i++){
                        listProduct.push(rs[i]);
                        lastID = rs[i].id_product;
                        }
                    }

                    let result = {
                    code: 1000,
                    message: "OK",
                    data: listProduct,
                    last_id: lastID,
                }
                return res.json(result)
                }

            } else{
                 let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
                    last_id: "Đã hết sản phẩm",
                }
                return res.json(result)
            }

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
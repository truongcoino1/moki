

module.exports = function (app, product) {
    app.post('/product/search_product', (req, res) => {
        var input = {change5 : [{
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
            price: req.body.price, condition: req.body.condition
        }],
         change1 : [{
            "category.category_id": req.body.category_id,
        }, {
            "brand.brand_name": req.body.brand_name,
        }, {
            "size.size_name": req.body.size_name,
        }, {
            price: req.body.price,
        }, {
            condition: req.body.condition
        }]
            , change2 : [ {
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name
        }
            , {
            "category.category_id": req.body.category_id, "size.size_name": req.body.size_name
        }
            , {
            "category.category_id": req.body.category_id, price: req.body.price
        }
            , {
            "category.category_id": req.body.category_id, condition: req.body.condition
        }
            , {
            "brand.brand_name": req.body.brand_name, "size.size_name": req.body.size_name
        }
            , {
            "brand.brand_name": req.body.brand_name, price: req.body.price
        }
            , {
            "brand.brand_name": req.body.brand_name, condition: req.body.condition
        }
            , {
            "size.size_name": req.body.size_name, condition: req.body.condition
        }
            , {
            "size.size_name": req.body.size_name, price: req.body.price
        }
            , {
            price: req.body.price, condition: req.body.condition
        }] ,
        change3 :[{
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
        }
        , {
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            price: req.body.price,
        }
        , {
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name, condition: req.body.condition
        }
        , {
            price: req.body.price,"category.category_id": req.body.category_id,
            "size.size_name": req.body.size_name,
        }
        , {
            condition: req.body.condition,"category.category_id": req.body.category_id,
            "size.size_name": req.body.size_name,
        }
        , {
            "category.category_id": req.body.category_id,price: req.body.price, condition: req.body.condition
        }
        , {
            "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
            price: req.body.price
        }
        , {
            "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
            condition: req.body.condition
        }
        , {
            "brand.brand_name": req.body.brand_name,price: req.body.price, condition: req.body.condition
        }
        , {
            "size.size_name": req.body.size_name,price: req.body.price, condition: req.body.condition
        }]
        ,change4 : [{
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
            price: req.body.price,
        }
        , {
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,
            condition: req.body.condition
        }
        , {
            "brand.brand_name": req.body.brand_name,
            "size.size_name": req.body.size_name,price: req.body.price, condition: req.body.condition
        }
        , {
            "category.category_id": req.body.category_id, "brand.brand_name": req.body.brand_name,
            condition: req.body.condition,
            price: req.body.price,
        }
        , {
            "category.category_id": req.body.category_id, "size.size_name": req.body.size_name,
            condition: req.body.condition,
            price: req.body.price,
        }]};
        console.log(req.body.category_id);
        var resultchange =0;
        if(req.body.category_id != null){
            resultchange +=1;
        }
        if(req.body.brand_name != null){
            resultchange +=1;
        }
        if(req.body.size_name != null){
            resultchange +=1;
        }
        if(req.body.price != null){
            resultchange +=1;
        }
        if(req.body.condition != null){
            resultchange +=1;
        }
        console.log(resultchange);
        if(resultchange === 1){
            product.find({
               $or : input.change1
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 1");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
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

        });
        } else  if(resultchange === 2){
            product.find({
               $or : input.change2
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 2");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
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

        });
        } else  if(resultchange === 3){
            product.find({
               $or : input.change3
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 3");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
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

        });
        } else  if(resultchange === 4){
            product.find({
               $or : input.change4
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 4");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
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

        });
        } else  if(resultchange === 5){
            product.find({
               $or : input.change5
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 5");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
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

        });
        }
    });
}



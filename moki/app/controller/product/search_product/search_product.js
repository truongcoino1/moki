

module.exports = {
    search_product(product,category_id, brand_id, product_size_id, price, condition) {
        product.find({
        }, (err, rs) => {
            if (rs.length != 0) {
                console.log("vao 1");
                let result = {
                    code: 1000,
                    message: "OK",
                    data: rs,
                }
                return result;
              
            }
            else {
                let result = {
                    code: 9992,
                    message: "Product is not existed",
                }
                return result;
            }

        });
      
        return "a";
    }
}
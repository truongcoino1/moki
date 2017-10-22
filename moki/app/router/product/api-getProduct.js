

module.exports = function(app,product ){
    app.post('/get_product', (req, res) => {
        product.find({ id_product: req.body.id_product }, (err, rs) => {
          if (rs.length  != 0) {            
                 result = {
                    code :1000,
                    message :"OK",
                    data :rs[0],
                  }
                  return res.json(result);
          } 
            else {
              let result = {
                code :9992,
                message :"Product is not existed",
              }
              return res.json(result);
            }
          
        })
      });
}

module.exports = function(app,profile,product){
    app.post('/profile/get_list_product', (req, res) => {
        profile.find({token : req.body.token}, (err, rs) => {
         let result = null;
          if (rs.length != 0) {
              let arIDProduct = rs[0].list_product;
              let input =[];
              for(var i =0; i < arIDProduct.length; i++){
                  input.push({id_product :arIDProduct[i]});
              }
              product.find({$or:[{id_product :}]})
             result = {
              code :1000,
              message :"OK",
              data :rs[0].list_like,
            }  
            return res.json(result)
          } else{
            result = {
              code :9992,
              message :"Profile is not existed.",            
            } 
          }
          return res.json(result)
        })
      });
}
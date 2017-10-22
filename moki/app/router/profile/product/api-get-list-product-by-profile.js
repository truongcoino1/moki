
module.exports = function(app,profile,product){
    app.post('/profile/get_list_product', (req, res) => {  
        profile.find({token : req.body.token}, (err, rs) => {
          if (rs.length != 0) {
            console.log(rs);
              let arIDProduct = rs[0].list_product;
              let input =[];
              for(var i =0; i < arIDProduct.length; i++){
                  input.push({id_product :arIDProduct[i]});
              }
              product.find({$or:input}, (err, rs)=>{
                let result = {
                    code :1000,
                    message :"OK",
                    data :rs,
                  }  
                  return res.json(result)
              });
             
          } else{
            let result = {
              code :9992,
              message :"Profile is not existed.",            
            } 

            return res.json(result)
          }
         
        });
      });
}
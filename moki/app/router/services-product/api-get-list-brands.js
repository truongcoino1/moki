

module.exports = function(app,product ){
    app.post('/profile/get_list_brands', (req, res) => {
        product.find({}, (err, rs) => {
          if (rs.length  != 0) { 
              let list_brands =[];
              for(var i =0; i < rs.length; i++) {
                  if(rs[i].category.category_id === req.body.category_id){
                    list_brands.push(rs[i].brand);
                  }
              }         
                 result = {
                    code :1000,
                    message :"OK",
                    data :list_brands,
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
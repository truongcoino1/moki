
module.exports = function(app,product){
  app.post('/profile/get_list_product', (req, res) => {
    product.find({}, (err, rs) => {
       let result = null;
       console.log(rs.length);
        if (rs.length != 0) {
           let list =[];
           for(var i=0; i < rs.length; i++){
             if(rs[i].category.category_id === req.body.category_id){
               list.push(rs[i]);
             }
           }
           result = {
            code :1000,
            message :"OK",
            data :list,
          }  
          return res.json(result)
        } else{
          result = {
            code :9992,
            message :"Product is not existed.",            
          } 
        }
        return res.json(result)
      })
    });
}
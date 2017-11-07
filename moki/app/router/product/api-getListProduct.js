
module.exports = function(app,product){
    app.post('/get_list_product', (req, res) => {
      product.find({"category.category_id": req.body.category_id}, (err, rs) => {
         let result = null;
         console.log("a");
          if (rs.length != 0) {
            //  let list =[];
            //  for(var i=0; i < rs.length; i++){
            //    if(rs[i].category.category_id === req.body.category_id){
            //      list.push(rs[i]);
            //    }
            //  }
             result = {
              code :1000,
              message :"OK",
              data :rs,
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
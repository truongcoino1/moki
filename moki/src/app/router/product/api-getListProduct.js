
module.exports = function(app,profile ){
    app.post('/profile/get_list_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
          let result= null;
          console.log(rs.length)
          if (rs.length != 0) {
               result = {
                code :1000,
                message :"OK",
                data :rs[0].list_product,
              }            
          } else{
            result = {
              code :9995,
              message :"User is not validated.",
             
            } 
          }
          return res.json(result)
        })
      });
}
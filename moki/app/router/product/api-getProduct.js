

module.exports = function(app,profile ){
    app.post('/profile/get_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
          if (rs.length  != 0) {
              let result = null;
              for(var i =0; i < rs[0].list_product.length; i++){
                if(rs[0].list_product[i].id_product === req.body.id_product){
                 result = {
                    code :1000,
                    message :"OK",
                    data :rs[0].list_product[i],
                  }
                  break;
                } else{
                  result = {
                    code :404,
                    message :"Product is not existed",
                  }
                  break;
                }
              }
              console.log("truongcoi")
              return res.json(result);
          } 
            else {
              let result = {
                code: 9995,
                message: "User is not validated.",
              }
              return res.json(result);
            }
          
        })
      });
}
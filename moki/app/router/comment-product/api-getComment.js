

module.exports = function(app,profile ){
    app.post('/profile/get_product_comment', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
          if (rs.length  != 0) {
              let result = null;
              for(var i =0; i < rs[0].list_product.length; i++){
                if(rs[0].list_product[i].id_product === req.body.id_product){
                  console.log("vao day")
                    for(var j =0; j <rs[0].list_product[i].comment.length; j++ ){
                      console.log(rs[0].list_product[i].comment[j].index)
                        if(rs[0].list_product[i].comment[j].index === req.body.index){
                          console.log("vao day1")
                            result =  rs[0].list_product[i].comment[j];
                            console.log(result)
                            break;
                        }
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
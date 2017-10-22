
module.exports = function(app,profile){
    app.post('/profile/add_address', (req, res) => {
        profile.find({token : req.body.token}, (err, rs) => {
          if (rs.length != 0) {
            let address ={
                address : req.body.address,
                address_id :{
                    id_tinh :req.body.id_tinh,
                    id_huyen : req.body.id_huyen,
                    id_xa :req.body.id_xa,
                },
                id : rs[0].list_order_address.length,
                default : req.body.default,
            }
            rs[0].list_order_address.push(address);
            rs[0].save(function (err, post) {
                if(!err){
                    let result = {
                        code: 1000,
                        message: "OK",
                    }
                    return res.json(result);
                }
              });
              
          } else{
            let result = {
              code :9992,
              message :"Profile is not existed.",            
            } 
            return res.json(result)
          }
         
        })
      });
}
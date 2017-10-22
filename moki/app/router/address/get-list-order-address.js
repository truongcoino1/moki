
module.exports = function(app,profile){
    app.post('/profile/add_address', (req, res) => {
        profile.find({token : req.body.token}, (err, rs) => {
          if (rs.length != 0) {           
                    let result = {
                        code: 1000,
                        message: "OK",
                        data : rs[0].list_order_address,
                    }
                    return res.json(result);         
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
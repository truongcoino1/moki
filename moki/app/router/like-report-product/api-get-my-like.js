
module.exports = function(app,profile){
    app.post('/profile/get_my_like', (req, res) => {
        profile.find({token : req.body.token}, (err, rs) => {
         let result = null;
          if (rs.length != 0) {
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
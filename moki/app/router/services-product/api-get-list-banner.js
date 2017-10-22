

module.exports = function(app,product ){
    app.post('/get_list_banner', (req, res) => {
        banner.find({}, (err, rs) => {
          if (rs.length  != 0) {      
                 result = {
                    code :1000,
                    message :"OK",
                    data :rs,
                  }
                  return res.json(result);
          } 
            else {
              let result = {
                code :9992,
                message :"Banners is not existed",
              }
              return res.json(result);
            }
          
        })
      });
}


module.exports = function (app, profile) {
    app.post('/logout', (req, res) => {
     profile.find({token : req.body.token}, (err, rs) =>{
        if(rs.length >0){
            rs[0].online =0;
            let result ={
                code :1000,
                message :"OK",
            }
            rs[0].save((e,r)=>{
                
            })
            return res.json(result);
        } else{
            let result ={
                code : 9995,
                message :"User is not validated",
            }
            return res.json(result);
        }
     })
    });
  }

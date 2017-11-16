

module.exports = function (app, profile) {
    app.post('/login', (req, res) => {
     profile.find({phonenumber : req.body.phonenumber, password : req.body.password}, (err, rs) =>{
        if(rs.length >0){
            rs[0].online =1;
            let result ={
                code :1000,
                message :"OK",
                profile : rs[0],
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
     });
    });
  }

  

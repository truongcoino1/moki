var convert = require('../Convert');


module.exports = function (app, profile, product) {
    app.post('/profile/set_like', (req, res) => {
        profile.find({ id_user: req.body.id_user }, (err, rs) => {
            //console.log(req.body.id_user);
            if (rs.length != 0) {                                    
                     product.find({id_product :req.body.id_product},(err1, rs1) =>{
                        // console.log(rs1[0].like);
                        if(rs1.length !=0){
                            let change =0;
                            for(var index = 0; index < rs1[0].like.length; index++){
                                if(rs1[0].like[index].id_user === req.body.id_user){
                                    change++;
                                }
                            }
                           if(change === 0){
                            let like = {
                                index: req.body.index,
                                count: req.body.count,
                                id_user :rs[0].id_user,
                                name: rs[0].firstname + " " + rs[0].lastname,
                            }
                            rs1[0].like.push(like);
                            rs1[0].save(function (err, product) {
                                if (err != null) {
                                  res.send(err);
                                  return null;
                                }
                                else {
                                    rs[0].list_like.push({
                                        id_product :req.body.id_product,
                                        name_product : rs1[0].name_product,
                                        price : rs1[0].price,
                                        image : rs1[0].image,
                                    })
                                    rs[0].save(function (err, product) {
                              
                                      });
                                    let result = {
                                        code: 1000,
                                        message: "OK.",
                                        data : rs1[0].like,
                                    }
                                    return res.json(result);
                                }
                      
                              });
                           } else{
                            console.log(rs1[0].like);
                               for(var index =0; index <rs1[0].like.length; index++){
                                   if(rs1[0].like[index].id_user === req.body.id_user){
                                    rs1[0].like.splice(index,1);
                                    
                                   }
                               }
                               rs1[0].save(function (err, product) {                               
                              });
                               for(var index =0; index <rs[0].list_like.length; index++){
                                if(rs[0].list_like[index].id_product === req.body.id_product){
                                 rs[0].list_like.splice(index,1);                               
                                }
                            }
                            rs[0].save(function (err, product) {                               
                            });
                            let result = {
                                code: 1000,
                                message: "OK.",
                                data : rs1[0].like,
                            }
                            return res.json(result);
                           }
                        } else {
                            let result = {
                                code: 9992,
                                message: "Product is not existed.",
                            }
                            return res.json(result);
                        }
            
                     })
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
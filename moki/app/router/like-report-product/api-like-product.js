var convert = require('../Convert');


module.exports = function (app, profile, product) {
    app.post('/profile/set_like', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {      
                        let like = {
                            index: req.body.index,
                            count: req.body.count,
                            id_user :rs[0].id_user,
                            name: rs[0].firstname + " " + rs[0].lastname,
                        }
                        
                     product.find({id_product :req.body.id_product},(err1, rs1) =>{
                        if(rs1.length !=0){
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
                                        data :like,
                                    }
                                    return res.json(result);
                                }
                      
                              });
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
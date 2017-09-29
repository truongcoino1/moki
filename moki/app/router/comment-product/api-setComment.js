var convert = require('../Convert');


module.exports = function (app, profile, product) {
    app.post('/profile/set_comment', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                        let poster = {
                            id: rs[0].id_user,
                            name: rs[0].firstname + " " + rs[0].lastname,
                            avatar: rs[0].avatar,
                        }
                        let comment = {
                            comment: req.body.comment,
                            index: req.body.index,
                            count: req.body.count,
                            poster: poster,
                        }
                     product.find({id_product :req.body.id_product},(err1, rs1) =>{
                        if(rs1.length !=0){
                            rs1[0].comment.push(comment);
                            rs1[0].save(function (err, product) {
                                if (err != null) {
                                  res.send(err);
                                  return null;
                                }
                                else {
                                    let result = {
                                        code: 1000,
                                        message: "OK.",
                                        data :comment,
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

module.exports = function (app, profile, product,message) {
    app.post('/conversation/set_conversation', (req, res) => {
        profile.find({ id_user: req.body.from_id }, (err, rs) => {
            if (rs.length != 0) {
                profile.find({ id_user: req.body.to_id }, (err1, rs1) => {
                    if (rs1.length != 0) {


                        product.find({ id_product: req.body.id_product }, (err2, rs2) => {
                      if(rs2.length!=0){
                                let newMessage = new message();
                                    newMessage.from_id = req.body.from_id;
                                    newMessage.to_id = req.body.to_id;
                                    newMessage.message = req.body.message;
                                    newMessage.product_id = req.body.id_product;
                                let result = {
                                    code: 1000,
                                    message: "OK",
                                    data: newMessage,
                                }
                                return res.json(result)
                          
                            }
                            else {
                                let result = {
                                    code: 9992,
                                    message: "Product is not existed.",
                                }
                                return res.json(result)
                            }
                            })
                    
                        }
                        else {
                        let result = {
                            code: 9992,
                            message: "Profile is not existed.",
                        }
                        return res.json(result)
                    }
                    
                })
            } 
            else {
                let result = {
                    code: 9992,
                    message: "Profile is not existed.",
                }
                return res.json(result)
            }
           // 
        })
    });
}
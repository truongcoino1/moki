module.exports = function (app, profile, product, message) {
    app.post('/conversation/get_conversation_detail', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                message.find({ from_id: rs[0].id_user, to_id: req.body.partner_id, product_id: req.body.product_id }, (err1, rs1) => {
                    if (rs1.length != 0) {
                        profile.find({ id_user: req.body.partner_id }, (err2, rs2) => { 
                        product.find({ id_product: req.body.product_id }, (err3, rs3) => {
                        let result = {
                            code: 1000,
                            message: "OK",
                            data: {
                                Partner: {
                                    id: rs2[0].id_user,
                                    username: rs2[0].username,
                                    avatar: rs2[0].avatar

                                },
                                Product: {
                                    id: rs3[0].id_product,
                                    name: rs3[0].name_product,
                                    image: rs3[0].image,
                                    price: rs3[0].price

                                }

                            }
                        }
                        return res.json(result)

                    })
                    })
                    } 
                    else {
                        let result = {
                            code: 9994,
                            message: "No Data or end of list Data.",
                        }
                        return res.json(result)
                    }

                })

            } else {
                let result = {
                    code: 9995,
                    message: "User is not validated.",
                }
                return res.json(result)

            }





        })




    })





}
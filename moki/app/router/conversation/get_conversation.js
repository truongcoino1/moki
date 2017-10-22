module.exports = function (app, profile, product, message) {
    app.post('/conversation/get_conversation', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                profile.find({ id_user: req.body.partner_id }, (err1, rs1) => {
                    if (rs1.length != 0) {
                        message.find({ from_id:rs[0].id_user, to_id: req.body.partner_id, id_message: req.body.conversation_id }, (err2, rs2) => {
                            if (rs2.length != 0) {
                                let result = {
                                    code: 1000,
                                    message: "Ok",
                                    data: rs2[0],
                                    created: rs[0].username,
                                   sender:{ id:  rs1[0].id_user,
                                           username: rs1[0].username,}
                                }
                                return res.json(result)


                            }

                            else {
                                let result = {
                                    code: 9994,
                                    message: "No Data or end of list Data.",
                                }
                                return res.json(result)
                            }




                        })
                    }





                    else {
                        let result = {
                            code: 9995,
                            message: "User is not validated.",
                        }
                        return res.json(result)
                    }
                })
            }
            else {
                let result = {
                    code: 9995,
                    message: "User is not validated.",
                }
                return res.json(result)

            }
        })


    })
}
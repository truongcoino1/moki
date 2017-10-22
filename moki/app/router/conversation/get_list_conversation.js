module.exports = function (app, profile, product, message) {
    app.post('/conversation/get_list_conversation', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                message.find({ from_id: rs[0].id_user }, (err1, rs1) => {
                    if (rs1.length != 0) {
                     
                        let result = {
                            code: 1000,
                            message: "Ok",
                            data: rs1,
                        }
                        return res.json(result)



                    } else {
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


    })





}
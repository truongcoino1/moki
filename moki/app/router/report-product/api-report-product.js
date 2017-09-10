

module.exports = function (app, profile) {
    app.post('/profile/report_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.length != 0) {
                let result = null;
                for (var i = 0; i < rs[0].list_product.length; i++) {
                    if (rs[0].list_product[i].id_product === req.body.id_product) {
                        let report = {
                            subject: req.body.subject,
                            details: req.body.details,
                        }
                        rs[0].list_product[i].list_report.push(report);
                        
                        rs[0].save((err, post) => {

                        });
                        result = {
                            code: 1000,
                            message: "OK",
                        }
                        break;
                    } else {
                        result = {
                            code: 404,
                            message: "Product is not existed",
                        }
                        break;
                    }
                }
                console.log("truongcoi")
                return res.json(result);
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
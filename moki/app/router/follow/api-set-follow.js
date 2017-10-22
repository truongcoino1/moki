
module.exports = function (app, profile) {
    app.post('/profile/set_follow', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            console.log(rs);
            if (rs.length != 0) {
                profile.find({ id_user: req.body.id_user }, (err1, rs1) => {
                    if (!err1) {
                        let e_following = {
                            id_user: rs1[0].id_user,
                            name: rs1[0].lastname,
                            avatar: rs1[0].avatar,
                        }
                        rs[0].list_following.push(e_following);
                        let e_followed = {
                            id_user: rs[0].id_user,
                            name: rs[0].lastname,
                            avatar: rs[0].avatar,
                        } 
                        rs1[0].followed.push(e_followed);
                        rs[0].save(function (err, post) {
                        });
                        rs1[0].save(function (err, post) {
                          
                        });
                        let result = {
                            code: 1000,
                            message: "OK",
                        }
                        return res.json(result);
                    }
                    
                });
            } else {
              let  result = {
                    code: 9992,
                    message: "Profile is not existed.",
                }
                return res.json(result);
            }
          
        })
    });
}
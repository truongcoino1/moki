

module.exports = function (app, profile) {
    app.post('/product/dalete_search_product', (req, res) => {
        profile.find({ token: req.body.token }, (err, rs) => {
            if (rs.lenght !== 0) {
               let list_search = rs[0].list_search;
               
               for(var i =0; i < list_search.length; i++){
                   if(rs[0].list_search[i].id_search === parseInt(req.body.id_search)){
                    console.log("a");
                    rs[0].list_search.splice(i,1);
                   }
               }
               for(var j =0; j < rs[0].list_search.length; j++){
                 rs[0].list_search[j].id_search = j;  
            }
                rs[0].save(function (err, post) {
                    if (err) {
                        let result = {
                            code: 404,
                            message: err
                        }
                        return res.json(result);
                    }
                    let result = {
                        code: 1000,
                        message: "OK",
                    }
                    return res.json(result);

                });
            }
        })
    });
}



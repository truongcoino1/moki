
module.exports = function (app, product) {
  app.post('/edit_product', (req, res) => {
    product.find({ id_product: req.body.id_product }, (err, rs) => {
      console.log(rs)
      if (rs.length != 0) {
        console.log(rs)
        rs[0].name_product = req.body.name_product;
        rs[0].price = req.body.price;
        rs[0].described = req.body.described;
        rs[0].ships_from = req.body.ships_from;
        rs[0].ships_from_id= {
          province :req.body.province,
          district :req.body.district,
          ward :req.body.ward,
        };;
        rs[0].condition = req.body.condition;
        rs[0].image = 
          {
            id:String,
            url :String,
          };
        rs[0].video = {
          url: req.body.video_url,
          thumb: req.body.video_thumb,
        };
        rs[0].dimention = {
          width: req.body.width,
          height: req.body.height,
          length: req.body.length
        };
        rs[0].size= {
          id: 1,
          size_name: req.body.size_name
        };
        rs[0].brand = {
          id: 1,
          brand_name: req.body.brand_name
        };
        rs[0].category = {
          category_id: 1,
          name: String,
          has_brand: String,
          has_name: String
        };
        rs[0].weight = req.body.weight;
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
      } else {
        console.log(err);
        let result = {
          code: 9992,
          message: "Product is not existed.",
        }
        return res.json(result);
      }

    })
  });
}

module.exports = function (app, product) {
  app.post('/edit_product', (req, res) => {
    product.find({ id_product: req.body.id_product }, (err, rs) => {
      console.log(rs)
      if (rs.length != 0) {
        console.log(rs)
        rs[0].name_product = req.body.name_product;
        rs[0].price = req.body.price;
        rs[0].price_new = req.body.price_new;
        rs[0].described = req.body.described;
        rs[0].product_size_id = req.body.product_size_id;
        rs[0].ships_from = req.body.ships_from;
        rs[0].ships_from_id = req.body.ships_from_id;
        rs[0].condition = req.body.condition;
        rs[0].image = [
          {
            file: req.body.file_image,
          }];
        rs[0].video = [{
          url: req.body.video_url,
          thumb: req.body.video_thumb,
        }];
        rs[0].dimention = {
          width: req.body.width,
          height: req.body.height,
          length: req.body.length
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
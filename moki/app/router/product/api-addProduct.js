
module.exports = function (app, profile, product) {
  app.post('/add_product', (req, res) => {
    var newprofile = new profile();
    profile.find({ token: req.body.token }, (err, rs) => {
      if (rs.length != 0) {
        let newProduct = new product();

        newProduct.id_user =req.body.token;
        newProduct.id_product= req.body.token + "." + rs[0].list_product.length;
        newProduct.name_product=req.body.name_product;
        newProduct.image= [
          {
            file: req.body.file_image,
          }];
        newProduct.price= req.body.price;
        newProduct.price_new= req.body.price_new;
        newProduct.price_precent= 0;
        newProduct.described= req.body.described;
        newProduct.ships_from= req.body.ships_from;
        newProduct.ships_from_id= req.body.ships_from_id;
        newProduct.condition= req.body.condition;
        newProduct.modified= null;
        newProduct.created= null;
        newProduct.like= 0;
        newProduct.comment= [];
        newProduct.is_like= null;
        newProduct.best_offers= null;
        newProduct.video= [{
          url: req.body.video_url,
          thumb: req.body.video_thumb,
        }];
        newProduct.size= [{
          id: String,
          size_name: req.body.size_name
        }];
        newProduct.brand = [{
          id: String,
          brand_name: req.body.brand_name
        }];
        newProduct.seller= {
          id_seller: String,
          username: String,
          avatar: String,
          score: String,
          listing: String,
          };
        newProduct.category = [{
          id: String,
          name: String,
          has_brand: String,
          has_name: String
        }];
        newProduct.state= null;
        newProduct.is_blocked= null;
        newProduct.can_edit= null;
        newProduct.banned=  null;
        newProduct.can_buy= null;
        newProduct.product_waiting_rate= null;
        newProduct.seller_vacation_mode= null;
        newProduct.offers= null;
        newProduct.url_share= null;
        newProduct.weight= req.body.weight;
        newProduct.dimention= {
          width: req.body.width,
            height: req.body.height,
              length: req.body.length
        };
        newProduct.list_report  =[];

        newProduct.save(function (err, product) {
          if (err != null) {
            res.send(err);
            return null;
          }
          else {
            res.json(profile);
          }

        });
        rs[0].list_product.push(newProduct.id_product);
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
            data: {
              id: post.list_product[post.list_product.length - 1],
              url :newProduct.url_share,
            }
          }
          return res.json(result);

        });
      } else {

        let result = {
          code: 9995,
          message: "User is not validated.",
        }
        return res.json(result);

      }
    })
  });
}

var con = require('../push-notification/function/constants');

module.exports = function (app, profile, product) {
  app.post('/add_product', (req, res) => {
    var newprofile = new profile();
    profile.find({ token: req.body.token }, (err, rs) => {
      if (rs.length != 0) {
        let newProduct = new product();
        newProduct.id_product= req.body.token + "." + rs[0].list_product.length;
        newProduct.name_product=req.body.name_product;
        newProduct.image= [ {
          id:0,
          url :'https://moki.vn//files/product/images/640s/51fdef35df0dde7d44d012e8b9bd71a2.jpg',
         },
         {
          id:1,
          url :'https://moki.vn//files/product/images/320s/51fdef35df0dde7d44d012e8b9bd71a2.jpg',
         },
         {
          id:2,
          url :'https://moki.vn//files/product/images/320s/51fdef35df0dde7d44d012e8b9bd71a2.jpg',
         },
         {
          id:3,
          url :'https://moki.vn//files/product/images/320s/51fdef35df0dde7d44d012e8b9bd71a2.jpg',
         }
        ]
         
        newProduct.price= req.body.price;
        newProduct.price_precent= 0;
        newProduct.described= req.body.described;
        newProduct.ships_from= req.body.ships_from;
        newProduct.ships_from_id= {
          province :req.body.province,
          district :req.body.district,
          ward :req.body.ward,
        };
        newProduct.condition= req.body.condition;
        newProduct.created= null;
        newProduct.like= [];
        newProduct.comment= [];
        newProduct.video= {
          url: req.body.video_url,
          thumb: req.body.video_thumb,
        };
        newProduct.size= {
          id_size: 1,
          size_name: req.body.size_name
        };
        newProduct.brand = {
          id_brand: 1,
          brand_name: req.body.brand_name
        };
        newProduct.seller= {
          id_user: rs[0].id_user,
          name: rs[0].lastname,
          avatar: rs[0].avatar,
          score: String,
          listing: String,
          };
        newProduct.category = {
          category_id: req.body.category_id,
          name: req.body.category_name,
        };
        newProduct.state= req.body.state;
        newProduct.blocked= [];
        newProduct.can_edit= [];
        newProduct.banned=  null;
        newProduct.url_share= null;
        newProduct.weight= req.body.weight;
        newProduct.dimention= {
          width: req.body.width,
          height: req.body.height,
          length: req.body.length,
        };
        newProduct.list_report  =[];
        console.log(con);
        newProduct.save(function (err, product) {
          if(err){
            console.log(err);
          }
        });
        rs[0].list_product.push(newProduct.id_product);
        rs[0].save(function (err, post) {
          if (err !== null) {
            let result = {
              code: 404,
              message: err
            }
            return res.json(result);
          } else{
            let result = {
              code: 1000,
              message: "OK",
              data: {
                id: post.list_product[post.list_product.length - 1],
                url :newProduct.url_share,
              }
            }
            return res.json(result);
          }
        });
        console.log("da vao day");
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
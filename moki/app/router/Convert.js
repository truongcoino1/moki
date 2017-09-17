
module.exports = {
    idProductToToken(product_id){
            return product_id.split('.')[0];
    },
}

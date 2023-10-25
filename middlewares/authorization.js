const {Product} = require('../models')
async function authorization(req,res,next){
    try{
        const {ProductId} = req.body
        const findProduct = await Product.findByPk(ProductId)
        if(!findProduct){
            throw {name: "not_found"}
        }
        if(req.user.id === findProduct.UserId){
            throw {name: "You are not authorized"}
        }
        next()
    }catch(err){
        next(err)
    }
}
module.exports = authorization
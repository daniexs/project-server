const {Product} = require('../models')
const {Op} = require('sequelize')

class ProductsController {
    static async getProducts(req,res,next){
        try {
            const {filter, page, name} = req.query
            let option = {}
            let limit = 9
            if(page){
                option.limit = limit
                option.offset = page*limit-limit
            }
            if(name){
                option.where.name = {[Op.iLike] : `%${name}%`}
            }
            if(filter){
                option = {where: {category: filter}}
            }
            const dataProducts = await Product.findAll(option)
            res.status(200).json(dataProducts)
        } catch (error) {
            next(error)
        }
    }
    static async getProductsDetail(req,res,next){
        try {
            const product = await Product.findByPk(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }
    static async addProducts(req,res,next){
        try {
            const UserId = req.user.id
            const {name, price, stock, description, category, imgUrl} = req.body
            const newProduct = await Product.create({name, price,stock, description,category, imgUrl, UserId})
            res.status(201).json(newProduct)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async editProducts(req,res,next){
        try {
            const id = req.params.id
            const UserId = req.user.id
            const {name, price, stock, description, category, imgUrl} = req.body
            const Product = await Product.update({name, price,stock, description,category, imgUrl,UserId}, {where:{id}} )
            res.status(200).json(Product)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ProductsController
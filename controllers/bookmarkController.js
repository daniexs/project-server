const {Bookmark} = require('../models')
class BookmarkController{
    static async getBookmar(req,res,next){
        try {
            const UserId = req.user.id
            const data = await Bookmark.findAll({where: {UserId}, include: ['Product']})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async addBookmark(req,res,next){
        try {
            
            const UserId = req.user.id
            const {ProductId} = req.body
            const newBookmark = await Bookmark.create({UserId, ProductId})
            res.status(201).json(newBookmark)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = BookmarkController

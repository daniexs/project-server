const {Bookmark} = require('../models')
class BookmarkController{
    static async getBookmar(req,res,next){
        try {
            const UserId = req.user.id
            const data = await Bookmark.findAll({where: {UserId}})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async addBookmark(req,res,next){
        try {
            const UserId = req.user.id
            const {footballId} = req.body
            const newBookmark = await Bookmark.create({UserId, footballId})
            res.status(201).json(newBookmark)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = BookmarkController

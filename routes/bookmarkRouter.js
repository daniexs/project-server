const express = require('express')
const router = express.Router()
const BookmarkController = require('../controllers/bookmarkController')
const authorization = require('../middlewares/authorization')


router.get('/get', BookmarkController.getBookmar)
router.post('/add', authorization,BookmarkController.addBookmark)



module.exports = router
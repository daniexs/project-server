const express = require('express')
const router = express.Router()
const BookmarkController = require('../controllers/bookmarkController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/get', BookmarkController.getBookmar)
router.post('/add', authorization,BookmarkController.addBookmark)



module.exports = router
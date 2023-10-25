const upload = require('../helpers/upload.helper');
const util = require('util');

exports.uploadMultiple = (req, res) => {
    // req.files contains an array of file object
    res.json(req.files);
}
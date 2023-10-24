const jwt = require('jsonwebtoken')

const signToken = (payload) => jwt.sign(payload, 'dani')
const verifyToken = (token) => jwt.verify(token, 'dani')

module.exports = {signToken, verifyToken}
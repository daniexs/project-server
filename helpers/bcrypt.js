const bcryipt = require('bcryptjs')

const hashPassword = (password) => bcryipt.hashSync(password, 10)
const verifyPassword = (password, db_password) => bcryipt.compareSync(password, db_password)

module.exports = {hashPassword, verifyPassword}
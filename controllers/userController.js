const { verifyPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {User} = require('../models')

class UserController {
    static async register(req,res,next){
        try {
            const {username, email, password} = req.body
            const newUser = await User.create({email,password,username})
            res.status(201).json({id: newUser.id, email: newUser.email})
        } catch (error) {
            next(error)
        }
    }
    static async login(req,res,next){
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if(!user){
                throw {name: "Invalid email/password"}
            }
            const validPassword = verifyPassword(password,user.password)
            if(!validPassword){
                throw {name: "Invalid email/password"}
            }
            const payload = {id: user.id, email: user.email}
            const access_token = generateToken(payload)
            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController
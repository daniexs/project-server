const { default: axios } = require("axios")

const headers = {
    'Content-Type': 'application/json',
    Accept : 'application/json',
    Authorization : 'mz8U4BrDlGvr1J07ei53pZ7f59wvhXvw6UG4EMbMfVxHuwpgu3Hg6vy0P6Cd'
}

class ProductsController {
    static async getLeague(req,res,next){
        try {
            const {data} = await axios({
                url: "https://api.sportmonks.com/v3/football/leagues",
                method: 'get',
                headers
            })
            res.status(200).json(data.data)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ProductsController
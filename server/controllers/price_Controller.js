const { Price } = require("../models/models")

class Price_Controller {
    async create (req,res) {

    }

    async getAll (req, res){
        const prices = await Price.findAll()
        return res.json(prices)
    }

    async getOne (req, res){

    }
}

module.exports = new Price_Controller()
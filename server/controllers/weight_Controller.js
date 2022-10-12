const { Weight } = require("../models/models")

class Weight_Controller {
    async create (req,res) {

    }

    async getAll (req, res){
        const weights = await Weight.findAll()
        return res.json(weights)
    }

    async getOne (req, res){

    }
}

module.exports = new Weight_Controller()
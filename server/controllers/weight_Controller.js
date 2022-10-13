const { Weight } = require("../models/models")

class Weight_Controller {
    async create(req, res) {

    }

    async getAll(req, res) {
        let { typeCakeId } = req.query
        let weights

        if (!typeCakeId) {
            weights = await Weight.findAll()
        }

        if (typeCakeId) {
            weights = await Weight.findAll({ where: { typeCakeId } })
        }

        return res.json(weights)
    }

    async getOne(req, res) {

    }
}

module.exports = new Weight_Controller()
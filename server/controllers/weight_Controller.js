const { Weight } = require("../models/models")
const Api_Error = require('../error/Api_Error');


class Weight_Controller {
    async create(req, res, next) {
        try {
            const { weight, price, typeCakeId } = req.body
            const weight_1 = await Weight.create({ weight, price, typeCakeId })
            return res.json(weight_1)
        } catch (e) {
            next(Api_Error.bad_Request(e))
        }

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
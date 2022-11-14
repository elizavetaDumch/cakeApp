const { Weight } = require("../models/models")

class Weight_Controller {
    async create(req, res) {
        let {weight_one, price_weight_one} = req.body
        const weight_1 = await Weight.create({weight_one, price_weight_one})
       /*  const weight_2 = await Weight.create({ weight_two, price_weight_two})        */
        return res.json(weight_1)
        
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
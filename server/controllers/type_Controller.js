const {Type_cake, Weight} = require('../models/models')

const Api_Error = require ('../error/Api_Error')

class Type_Controller {
    async create (req,res) {
       
        const {name, weight1} = req.body
        const type = await Type_cake.create({name})
        
        if (weight1) {
            weight1 = JSON.parse(weight1)
            /* weight2 = JSON.parse(weight2) */

            //для первой категории веса
            weight1.forEach(i =>
                Weight.create({
                    weight: i.weight,
                    price: i.price,
                    typeCakeId: type.id
                })
            )
           //для второй категории веса
          /*   weight2.forEach(i =>
                Weight.create({
                    weight: i.weight,
                    price: i.price,
                    typeCakeId: type.id
                })
            ) */
        }
        return res.json(type)
    }

    async getOne (req, res){

    }

    async getAll (req, res){
        const types = await Type_cake.findAll()
        return res.json(types)
    }
   
}

module.exports = new Type_Controller()
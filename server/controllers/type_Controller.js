const {Type_cake} = require('../models/models')
const Api_Error = require ('../error/Api_Error')

class Type_Controller {
    async create (req,res) {
        //const {name} = req.body

    }

    async getOne (req, res){

    }

    async getAll (req, res){
        const types = await Type_cake.findAll()
        return res.json(types)
    }
   
}

module.exports = new Type_Controller()
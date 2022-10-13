const { Cake } = require('../models/models')
const Api_Error = require('../error/Api_Error')
const uuid = require('uuid')
const path = require('path')


class Cake_Controller {
    async create(req, res, next) {

        try {
            let { name, description, price } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //адаптирует путь к ОС (парам: 1 - путь до тек. папки с контроллерами, 2 - вернуться на директорию назад, 3 - папка статик)
            const cake = await Cake.create({ name, description, img: fileName, price })
            return res.json(cake)
        } catch (e) {
            next(Api_Error.bad_Request(e))
        }
    }

    async getAll(req, res) {
        let {typeCakeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let cakes 
        if (!typeCakeId){
            cakes = await Cake.findAndCountAll({limit, offset})           
        }        
        if (typeCakeId){
            cakes = await Cake.findAndCountAll({where:{typeCakeId}, limit, offset})           
        }
        return res.json(cakes)
    }

}

module.exports = new Cake_Controller()
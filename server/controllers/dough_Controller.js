const {Dough} = require('../models/models')
const Api_Error = require ('../error/Api_Error')
const uuid = require('uuid')
const path = require('path')

class Dough_Controller {
    async create (req,res, next) {
        // try {
        //     let { type, description } = req.body
        //     const { img } = req.files
        //     let fileName = uuid.v4() + ".jpg"
        //     img.mv(path.resolve(__dirname, '..', 'static', fileName)) //адаптирует путь к ОС (парам: 1 - путь до тек. папки с контроллерами, 2 - вернуться на директорию назад, 3 - папка статик)
        //     const dough = await Dough.create({ type, description, img: fileName })
        //     return res.json(dough)
        // } catch (e) {
        //     next(Api_Error.bad_Request(e))
        // }

        const { type } = req.body
        const dough = await Dough.create({ type })

    }

    async getAll (req, res){
        const dough = await Dough.findAll()
        return res.json(dough)

    }
   
}

module.exports = new Dough_Controller()
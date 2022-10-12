const Router = require ('express')
const weight = require('../controllers/weight_Controller')
const router = new Router()

router.post('/', weight_Controller.create)
router.get('/:id', weight_Controller.getOne)
router.get('/', weight_Controller.getAll)

module.exports = router
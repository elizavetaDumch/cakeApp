const Router = require ('express')
const order_Controller = require('../controllers/order_Controller')
const router = new Router()

router.post('/', order_Controller.create)
router.get('/', order_Controller.getAll)
router.get('/:id', order_Controller.getOne)

module.exports = router
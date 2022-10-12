const Router = require ('express')
const cart_cake_Controller = require('../controllers/cart_cake_Controller')
const router = new Router()

router.post('/', cart_cake_Controller.create)
router.get('/', cart_cake_Controller.getAll)

module.exports = router
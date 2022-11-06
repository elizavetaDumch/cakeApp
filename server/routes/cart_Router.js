const Router = require ('express')
const cart_Controller = require('../controllers/cart_Controller')
const authMiddleware = require ('../middleware/authMiddleware')
const router = new Router()

router.post('/', authMiddleware, cart_Controller.addProduct)
router.del('/', authMiddleware, cart_Controller.removeProduct)
router.get('/', authMiddleware, cart_Controller.getCart)

module.exports = router

const Router = require ('express')
const price = require('../controllers/price_Controller')
const router = new Router()

router.post('/', price_Controller.create)
router.get('/:id', price_Controller.getOne)
router.get('/', price_Controller.getAll)

module.exports = router
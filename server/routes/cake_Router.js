const Router = require ('express')
const router = new Router()
const cake_Controller = require('../controllers/cake_Controller')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',  checkRole('ADMIN'), cake_Controller.create)
router.get('/', cake_Controller.getAll)

module.exports = router
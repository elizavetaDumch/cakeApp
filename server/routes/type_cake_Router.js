const Router = require ('express')
const type_Controller = require('../controllers/type_Controller')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', type_Controller.create)
router.get('/:id', type_Controller.getOne)
router.get('/', type_Controller.getAll)

module.exports = router
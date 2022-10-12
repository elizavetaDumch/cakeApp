const Router = require ('express')
const filling_Controller = require('../controllers/filling_Controller')
const router = new Router()

router.post('/', filling_Controller.create)
router.get('/', filling_Controller.getAll)

module.exports = router
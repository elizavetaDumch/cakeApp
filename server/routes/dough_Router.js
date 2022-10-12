const Router = require ('express')
const dough_Controller = require('../controllers/dough_Controller')
const router = new Router()

router.post('/', dough_Controller.create)
router.get('/', dough_Controller.getAll)

module.exports = router
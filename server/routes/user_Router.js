const Router = require ('express')
const router = new Router()
const user_Controller = require('../controllers/user_Controller')
const authMiddleware = require ('../middleware/authMiddleware')



router.post('/registration', user_Controller.registration)
router.post('/login', user_Controller.login)
router.get('/auth', authMiddleware, user_Controller.check)
router.get('/', user_Controller.getAll)
router.get('/:id', user_Controller.getOne)

module.exports = router
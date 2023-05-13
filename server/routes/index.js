const Router = require ('express')
const router = new Router()
const cake_Router = require ('./cake_Router')
const cart_Router = require ('./cart_Router')
const weight_Router = require ('./weight_Router')
const dough_Router = require ('./dough_Router')
const filling_Router = require ('./filling_Router')
const order_Router = require ('./order_Router')
const type_cake_Router = require ('./type_cake_Router')
const user_Router = require ('./user_Router')



router.use('/cake', cake_Router)
router.use('/cart', cart_Router)
router.use('/dough', dough_Router)
router.use('/filling', filling_Router)
router.use('/weight', weight_Router)
router.use('/order', order_Router)
router.use('/type_cake', type_cake_Router)
router.use('/user', user_Router)

module.exports = router

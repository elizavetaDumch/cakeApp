const Router = require("express");
const order_Controller = require("../controllers/order_Controller");
const authMiddleware = require("../middleware/authMiddleware");
const toAsyncRouter = require("async-express-decorator");
const router = toAsyncRouter(Router());
const checkRole = require('../middleware/checkRoleMiddleware')

router.post("/", authMiddleware, order_Controller.create);
router.get("/", authMiddleware, order_Controller.getAll);
router.get("/all", order_Controller.findAll);  //заказы всех пользователей
router.get("/:id", authMiddleware, order_Controller.getOne);

module.exports = router;

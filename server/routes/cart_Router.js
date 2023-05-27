const Router = require("express");
const cart_Controller = require("../controllers/cart_Controller");
const authMiddleware = require("../middleware/authMiddleware");
const toAsyncRouter = require("async-express-decorator");
const router = toAsyncRouter(Router());

router.post("/", authMiddleware, cart_Controller.addProduct);
router.del("/:id", authMiddleware, cart_Controller.removeProduct);
router.get("/", authMiddleware, cart_Controller.getCart);
router.patch("/:id", authMiddleware, cart_Controller.updateProduct);

module.exports = router;

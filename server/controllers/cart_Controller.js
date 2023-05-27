const cartService = require("../services/cartService");

class Cart_Controller {
    async addProduct(req, res) {
        await cartService.addProduct({
            productId: req.body.productId,
            weightId: req.body.weightId,
            fillingId: req.body.fillingId,
            doughId: req.body.doughId,
            userId: req.user.id,
        });
        const cart = await cartService.getUserCart(req.user.id);
        return res.json(cart);
    }

    async removeProduct(req, res) {
        await cartService.removeCartProduct({
            cartProductId: req.params.id,
            userId: req.user.id,
        });
        const cart = await cartService.getUserCart(req.user.id);
        return res.json(cart);
    }

    async getCart(req, res) {
        const cart = await cartService.getUserCart(req.user.id);
        return res.json(cart);
    }

    async updateProduct(req, res) {
        await cartService.updateCartProduct({
            productId: req.params.id,
            userId: req.user.id,
            params: req.body
        });
        const cart = await cartService.getUserCart(req.user.id);
        return res.json(cart);
    }
}

module.exports = new Cart_Controller();

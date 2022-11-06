const cartService = require("../services/cartService");

class Cart_Controller {
    async addProduct(req, res) {
        const cart = await cartService.addProduct(
            req.body.productId,
            req.user.id
        );
        return res.json(cart);
    }

    async removeProduct(req, res) {
        return res.status(204).json();
    }

    async getCart(req, res) {
        return res.status(204).json();
    }
}

module.exports = new Cart_Controller();

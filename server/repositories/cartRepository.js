const { Cart, CartProduct } = require("../models/models");

class CartRepository {
    /**
     * initialize the user's cart on first access
     * @param userId
     * @returns {Promise<*>} Cart
     */
    async initializeUserCart(userId) {
        return await Cart.create({
            userId: userId,
        });
    }

    async update(cart) {
        await Cart.upsert(cart);
    }

    async upsertCartProduct(cartProduct) {
        await CartProduct.upsert(cartProduct)
    }
}

module.exports = new CartRepository();

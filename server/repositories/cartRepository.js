const { Cart, CartProduct } = require("../models/models");

class CartRepository {
    /**
     * Initialize the user's cart on first access
     * @param userId
     * @returns {Promise<Cart>}
     */
    async initializeUserCart(userId) {
        const cart = await Cart.create({
            userId: userId,
        });
        return cart;
    }

    async truncateCart(cartId) {
        await CartProduct.destroy({
            where: { cartId },
        });
    }

    async findCartProductByIdAndCartId({ id, cartId }) {
        const cartProduct = await CartProduct.findOne({
            where: { id, cartId },
        });
        return cartProduct;
    }

    async upsertCartProduct(cartProduct) {
        await CartProduct.upsert(cartProduct);
    }

    async deleteCartProductById(id) {
        await CartProduct.destroy({ where: { id } });
    }
}

module.exports = new CartRepository();

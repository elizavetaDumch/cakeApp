const cartRepository = require("../repositories/cartRepository");
const userRepository = require("../repositories/userRepository");

class CartService {
    /**
     * Increase the cartProduct quantity if the product is already in the cart
     * otherwise add the product to the cart.
     * @param productId
     * @param userId
     * @returns {Promise<Cart>}
     */
    async addProduct(productId, userId) {
        const cart = await this.getUserCart(userId);
        const cartProducts = cart.cart_products;
        let cartProduct = cartProducts.find(
            (cartProduct) => cartProduct.cakeId === productId
        );
        if (cartProduct) {
            cartProduct = cartProduct.dataValues
            cartProduct.quantity++;
        } else {
            cartProduct = {
                cartId: cart.id,
                cakeId: productId,
            };
        }
        await cartRepository.upsertCartProduct(cartProduct);
        return cart;
    }

    /**
     * Returns existing user cart otherwise instantiates the new one.
     * @param userId
     * @returns {Promise<Cart>}
     */
    async getUserCart(userId) {
        const user = await userRepository.getUserById(userId);
        return user.cart
            ? user.cart
            : await cartRepository.initializeUserCart(user.id);
    }
}

module.exports = new CartService();

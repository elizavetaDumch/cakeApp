const cartRepository = require("../repositories/cartRepository");
const userRepository = require("../repositories/userRepository");

class CartService {
    /**
     * Increase the cartProduct quantity if the product is already in the cart
     * otherwise add the product to the cart.
     * @param productId
     * @param weightId
     * @param userId
     * @returns {Promise<void>}
     */
    async addProduct({ productId, weightId, fillingId, doughId, userId }) {
        const cart = await this.getUserCart(userId);
        const cartProducts = cart.cart_products;
        let cartProduct = this.#getCartExistingProduct(cartProducts, {
            productId,
            weightId,
        });
        if (cartProduct) {
            cartProduct = cartProduct.dataValues;
            cartProduct.quantity++;
        } else {
            cartProduct = {
                cartId: cart.id,
                cakeId: productId,
                weightId,
                fillingId,
                doughId,
            };
        }
        await cartRepository.upsertCartProduct(cartProduct);
    }

    /**
     * Removes the CartProduct from the user's cart.
     * @param cartProductId
     * @param userId
     * @returns {Promise<void>}
     */
    async removeCartProduct({ cartProductId, userId }) {
        const cart = await this.getUserCart(userId);
        // make sure that the CartProduct belongs to the current user's cart
        const cartProduct = await cartRepository.findCartProductByIdAndCartId({
            id: cartProductId,
            cartId: cart.id,
        });
        if (cartProduct) {
            await cartRepository.deleteCartProductById(cartProductId);
        }
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

    getCartProductPrice(cartProduct) {
        return (
            cartProduct.quantity *
            (cartProduct.cake.price + cartProduct.weight.price)
        );
    }

    /**
     * Removes all products from the current user's cart
     * @param cartId
     * @returns {Promise<void>}
     */
    async truncateCart(cartId) {
        await cartRepository.truncateCart(cartId);
    }

    /**
     * Returns the existing product in the cart (with the same properties: productId, weightId, etc.).
     * @param cartProducts
     * @param productId
     * @param weightId
     * @returns {CartProduct | null}
     */
    #getCartExistingProduct(cartProducts, { productId, weightId }) {
        let cartProduct = cartProducts.find(
            (product) =>
                product.cakeId === productId && product.weightId === weightId
        );
        return cartProduct;
    }
}

module.exports = new CartService();

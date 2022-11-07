const orderRepository = require("../repositories/orderRepository");
const cartService = require("./cartService");

class OrderService {
    async create({ name, phone, userId }) {
        const cart = await cartService.getUserCart(userId);
        const orderProducts = [];
        let orderPrice = 0;
        cart.cart_products.forEach((cartProduct) => {
            orderProducts.push(
                OrderService.mapCartProductToOrderProduct(cartProduct)
            );
            orderPrice += cartService.getCartProductPrice(cartProduct);
        });
        if (!orderProducts) {
            throw Api_Error.bad_Request("Ваша корзина пуста");
        }
        const order = await orderRepository.create({
            name,
            phone,
            order_products: orderProducts,
            price: orderPrice,
            userId,
        });
        await cartService.truncateCart(cart.id);
        return order;
    }

    /**
     * Returns all current user's orders
     * @param userId
     * @returns {Promise<*>}
     */
    async getUserOrders(userId) {
        const orders = await orderRepository.getUserOrders(userId);
        return orders;
    }

    async getOrder({ id, userId }) {
        const order = await orderRepository.getUserOrder({ id, userId });
        return order;
    }

    static mapCartProductToOrderProduct(cartProduct) {
        return {
            cakeId: cartProduct.cakeId,
            weightId: cartProduct.weightId,
            fillingId: cartProduct.fillingId,
            doughId: cartProduct.doughId,
            quantity: cartProduct.quantity,
        };
    }
}

module.exports = new OrderService();

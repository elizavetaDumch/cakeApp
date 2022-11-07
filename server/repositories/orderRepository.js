const {
    Order,
    OrderProduct,
    Cake,
    Weight,
    Filling,
    Dough,
} = require("../models/models");

class OrderRepository {
    /**
     * @param {Object} order
     * @returns {Promise<Order>}
     */
    async create(order) {
        const createdOrder = await Order.create(order, {
            include: OrderRepository.#getOrderIncludeGraph(),
        });
        return createdOrder;
    }

    async getUserOrders(userId) {
        const orders = await Order.findAll({
            where: {
                userId,
            },
            order: [["id", "DESC"]],
            include: OrderRepository.#getOrderIncludeGraph(),
        });
        return orders;
    }

    async getUserOrder({ id, userId }) {
        const order = await Order.findOne({
            where: {
                id,
                userId,
            },
            include: OrderRepository.#getOrderIncludeGraph(),
        });
        return order;
    }

    static #getOrderIncludeGraph() {
        return [
            {
                model: OrderProduct,
                include: [
                    {
                        model: Cake,
                    },
                    {
                        model: Weight,
                    },
                    {
                        model: Filling,
                    },
                    {
                        model: Dough,
                    },
                ],
            },
        ];
    }
}

module.exports = new OrderRepository();

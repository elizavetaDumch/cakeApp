const orderService = require("../services/orderService");

class Order_Controller {
    async create(req, res) {
        const order = await orderService.create({
            name: req.body.name,
            phone: req.body.phone,
            userId: req.user.id,
        });
        return res.json(order);
    }

    async getAll(req, res) {
        const orders = await orderService.getUserOrders(req.user.id);
        return res.json(orders);
    }

    async getOne(req, res) {
        const order = await orderService.getOrder({
            id: req.params.id,
            userId: req.user.id
        });
        if (!order) {
            return res.status(404).end();
        }
        return res.json(order);
    }
}

module.exports = new Order_Controller();

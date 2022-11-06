const { User, Cart, CartProduct } = require("../models/models");

class UserRepository {
    async getUserById(userId) {
        return await User.findByPk(userId, {
            include: [
                {
                    model: Cart,
                    required: false,
                    include: [
                        {
                            model: CartProduct,
                            required: false,
                        },
                    ],
                },
            ],
        });
    }
}

module.exports = new UserRepository();

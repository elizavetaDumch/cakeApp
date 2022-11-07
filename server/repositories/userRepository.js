const {
    User,
    Cart,
    CartProduct,
    Cake,
    Weight,
    Filling,
    Dough,
} = require("../models/models");

class UserRepository {
    async getUserById(userId) {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Cart,
                    required: false,
                    include: [
                        {
                            model: CartProduct,
                            required: false,
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
                    ],
                },
            ],
        });
        return user;
    }
}

module.exports = new UserRepository();

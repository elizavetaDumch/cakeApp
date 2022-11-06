const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Cake = sequelize.define('cake', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER}
})

const Filling = sequelize.define('filling', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Dough = sequelize.define('dough', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Type_cake = sequelize.define('type_cake', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const Weight = sequelize.define('weight', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    weight: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER}
})

const Cart = sequelize.define("cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const CartProduct = sequelize.define("cart_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    roles: { type: DataTypes.STRING, defaultValue: "USER" }, //чтобы зарегать админа роль ADMIN
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    num_order: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING, defaultValue: "Обработка заказа" },
    name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
})


User.hasMany(Order)
User.hasOne(Cart)

Cake.hasMany(CartProduct)
Cake.belongsTo(Type_cake)

Filling.hasMany(CartProduct)

Dough.hasMany(CartProduct)

Weight.belongsTo(Type_cake)

Type_cake.hasMany(Weight)
Type_cake.hasMany(Cake)

Order.belongsTo(User)

CartProduct.belongsTo(Cart)
CartProduct.belongsTo(Filling)
CartProduct.belongsTo(Cake)
CartProduct.belongsTo(Dough)

Cart.hasMany(CartProduct)
Cart.belongsTo(User)


module.exports = {
    Cake,
    Filling,
    Dough,
    Type_cake,
    Weight,
    Cart,
    CartProduct,
    User,
    Order
}

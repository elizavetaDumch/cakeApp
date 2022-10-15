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

const Cart_cake = sequelize.define('cart_cake', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, defaultValue: "Проверяем наличие ингредиентов" },
})

/*const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})*/

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    roles: { type: DataTypes.STRING, defaultValue: "USER" }, //чтобы зарегать админа роль ADMIN
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, defaultValue: "Обработка заказа" },
    name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    address: { type: DataTypes.INTEGER },
})




Cake.hasMany(Cart_cake)
Cart_cake.belongsTo(Cake)

Filling.hasMany(Cart_cake)
Cart_cake.belongsTo(Filling)

Dough.hasMany(Cart_cake)
Cart_cake.belongsTo(Dough)

Type_cake.hasMany(Weight)
Weight.belongsTo(Type_cake)

Type_cake.hasMany(Cake)
Cake.belongsTo(Type_cake)

User.hasMany(Order)
Order.belongsTo(User)

/*Cart.hasMany(Cart_cake)
Cart_cake.belongsTo(Cart)

Cart.hasOne(Order)
Order.belongsTo(Cart)*/



module.exports = {
    Cake, Filling, Dough, Type_cake, Weight, Cart_cake, User, Order
}
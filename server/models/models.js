const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Cake = sequelize.define("cake", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
});

const Filling = sequelize.define("filling", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false },
});

const Dough = sequelize.define("dough", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false },
});

const Type_cake = sequelize.define("type_cake", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const Weight = sequelize.define("weight", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    weight: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER },
});

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

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    roles: { type: DataTypes.STRING, defaultValue: "USER" }, //чтобы зарегать админа роль ADMIN
});

const Order = sequelize.define("order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, defaultValue: "Обработка заказа" },
    name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING, defaultValue: "Обработка заказа" },
});

const OrderProduct = sequelize.define("order_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

User.hasMany(Order);
User.hasOne(Cart);

Cake.belongsTo(Type_cake);

Weight.belongsTo(Type_cake);

Type_cake.hasMany(Weight);
Type_cake.hasMany(Cake);

Order.belongsTo(User, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: "cascade",
});
Order.hasMany(OrderProduct);

CartProduct.belongsTo(Cart, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: "cascade",
});
CartProduct.belongsTo(Filling);
CartProduct.belongsTo(Cake, {
    foreignKey: {
        allowNull: false,
    },
});
CartProduct.belongsTo(Weight, {
    foreignKey: {
        allowNull: false,
    },
});
CartProduct.belongsTo(Dough);

OrderProduct.belongsTo(Order, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: "cascade",
});
OrderProduct.belongsTo(Filling);
OrderProduct.belongsTo(Cake, {
    foreignKey: {
        allowNull: false,
    },
});
OrderProduct.belongsTo(Weight, {
    foreignKey: {
        allowNull: false,
    },
});
OrderProduct.belongsTo(Dough);

Cart.hasMany(CartProduct);
Cart.belongsTo(User);

module.exports = {
    Cake,
    Filling,
    Dough,
    Type_cake,
    Weight,
    Cart,
    CartProduct,
    User,
    Order,
    OrderProduct,
};

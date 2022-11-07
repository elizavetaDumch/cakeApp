import Admin from "./pages/Admin";
import Cart_Cake from "./pages/Cart_Cake";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";
import Main_Shop from "./pages/Main_Shop";
import {
    ADMIN_ROUTE,
    CART_CAKE_ROUTE,
    ORDER_ROUTE,
    ORDERS_ROUTE,
    MAIN_SHOP_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRouters = [
    {
        path: ADMIN_ROUTE, //путь как константа из файла utils/consts.js
        Component: Admin,
    },
    {
        path: CART_CAKE_ROUTE,
        Component: Cart_Cake,
    },
    {
        path: ORDER_ROUTE,
        Component: Order,
    },
    {
        path: ORDERS_ROUTE,
        Component: Orders,
    },
];

export const publicRouters = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: MAIN_SHOP_ROUTE,
        Component: Main_Shop,
    },
];

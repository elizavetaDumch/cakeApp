import Admin from './pages/Admin'
import Cart_Cake from './pages/Cart_Cake'
import Order from './pages/Order'
import Auth from './pages/Sign_User/Auth'
import Bento_Cakes from './pages/Shop/Bento_Cakes'
import Cakes_Main_Shop from './pages/Shop/Cakes_Main_Shop'
import Maffins from './pages/Shop/Maffins'
import { ADMIN_ROUTE, CART_CAKE_ROUTE, ORDER_ROUTE, CAKES_MAIN_SHOP_ROUTE, BENTO_CAKES_ROUTE, MAFFINS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, } from './utils/consts'

export const authRouters = [
    {
        path: ADMIN_ROUTE, //путь как константа из файла utils/consts.js
        Component: Admin
    },
    {
        path: CART_CAKE_ROUTE, 
        Component: Cart_Cake
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    }

]

export const publicRouters = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CAKES_MAIN_SHOP_ROUTE,
        Component: Cakes_Main_Shop
    },
    {
        path: BENTO_CAKES_ROUTE,
        Component: Bento_Cakes
    },
    {
        path: MAFFINS_ROUTE,
        Component: Maffins
    },    

]
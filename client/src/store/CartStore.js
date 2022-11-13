import { makeAutoObservable } from "mobx";
import { fetchCart } from "../http/cartAPI";

export default class CartStore {
    constructor() {
        this._products = [];
        fetchCart().then((cart) => {
            this._products = cart.cart_products;
        });
        makeAutoObservable(this);
    }

    get products() {
        return this._products;
    }

    set products(products) {
        this._products = products;
    }

    get quantity() {
        if (this._products === undefined) {
            window.location.reload()
        }
        return this._products
            .map((product) => product.quantity)
            .reduce((previous, current) => previous + current, 0);
    }
}

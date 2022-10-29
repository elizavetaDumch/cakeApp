import {makeAutoObservable} from "mobx"

export default class CartStore {
    constructor () {
        this._products = []
        makeAutoObservable(this)
    }

    get products() {
        return this._products;
    }

    set products(products) {
        this._products = products;
    }

    get quantity() {
        return this._products
            .map(product => product.quantity)
            .reduce((previous, current) => previous + current, 0)
    }

    addProduct(product) {
        const productInCart = this._products.find(productInCart => productInCart.id === product.id)
        if (productInCart) {
            productInCart.quantity++
        } else {
            this._products.push({...product, quantity: 1})
        }
    }
}

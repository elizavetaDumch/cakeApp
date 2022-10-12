import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor () {
        this._isAuth = true 
        this._user = {}
        makeAutoObservable(this) //при изменении переменных компоненты будут перерендоваться

    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    //используются только, если переменная была изменена
    get isAuth() {
        return this._isAuth
    }

    get isUser() {
        return this._user
    }

}
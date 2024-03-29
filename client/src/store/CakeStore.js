import { makeAutoObservable } from "mobx"

export default class CakeStore {
    constructor() {            //при изменении переменных компоненты будут перерендоваться

        this._types = []
        this._cakes = []
        this._selectedType = {}
        this._page = 1          //текущая странциа
        this._totalCount = 0    //общее кол-во доступных товаров по запросу
        this._limit = 4         //кол-во товаров на 1-ой странице
        this._fillings = []
        this._selectedFillng = {}
        this._doughs = []

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setCakes(cakes) {
        this._cakes = cakes
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setFillings(fillings) {
        this._fillings = fillings
    }

    setSelectedFilling(filling) {        
        this._selectedFillng = filling
    }

    setDough(doughs) {
        this._doughs = doughs
    }

    //используются только, если переменная была изменена
    get types() {
        return this._types
    }

    get cakes() {
        return this._cakes
    }

    get selectedType() {
        return this._selectedType
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get fillings() {
        return this._fillings
    }

    get selectedFilling() {
        return this._selectedFillng
    }

    get doughs() {
        return this._doughs
    }
}
import {makeAutoObservable} from 'mobx';


export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Теливизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Asus'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Samsung'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 50000, rating: 5, img: 'https://via.placeholder.com/300.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 50000, rating: 5, img: 'https://via.placeholder.com/300.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 50000, rating: 5, img: 'https://via.placeholder.com/300.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 50000, rating: 5, img: 'https://via.placeholder.com/300.jpg'},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    
    setBrands(brands) {
        this._brands = brands
    }
    
    setDevices(devices) {
        this._devices = devices
    }
    
    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    
    get brands() {
        return this._brands
    }
    
    get devices() {
        return this._devices
    }
    
    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
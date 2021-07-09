const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, Basket } = require('../models/models')

class UserContrtoller {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный Email или Password'))
        }
    }
    async login(req, res) {
        // res.status(200).json({message: 'Work'})
    }
    async check(req, res) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserContrtoller()
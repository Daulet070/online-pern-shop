const Router = require('express')
const router = new Router()
const typeContainer = require('../controllers/typeController')

router.post('/', typeContainer.create)
router.get('/', typeContainer.getAll)

module.exports = router
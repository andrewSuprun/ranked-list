const Router = require('express')
const router = new Router()
const names = require('../controller/nameConroller.js')
const user = require('../controller/userController.js')

router.post('/', names.create)

router.get('/', names.getAll)

router.put('/names/:id', names.update)

router.delete('/names/:id', names.delete)

// router.post('/login', user.create)
module.exports = router

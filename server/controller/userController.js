const { User } = require('../models/models')
const ApiError = require('../error/ApiError')

class UserController {
async create(req, res) {
  try {
    const {name} = req.body.name || ''
    console.log(name, "_______________")
    const user = User.create({name, rank})
    return res.json(user)
  } catch (error) {
    next(ApiError.badRequest(error.message))
  }
}
}

module.exports = new UserController()

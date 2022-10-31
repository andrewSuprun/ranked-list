const { Name } = require('../models/models')
const ApiError = require('../error/ApiError')

class NameController {
  async create(req, res, next) {
    try {
      const inputName = req.body.name || ''
      const rank = req.body.rank || ''
      console.log("----------------------------------------", inputName)
      const name = await Name.create({name : inputName, rank: rank})
      return res.json(name)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async getAll(req, res) {
    const names = await Name.findAll()
    return res.json(names)
  }

  async delete(req, res) {
    try {
      const id = req.params.id
      await Name.destroy({
        where: { id },
      })
      res.sendStatus(204)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id
      const { name, rank } = req.body
      await Name.update(
        { name, rank },
        {
          where: { id },
        }
      )
      res.sendStatus(204)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }
}
module.exports = new NameController()

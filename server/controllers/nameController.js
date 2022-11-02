import { Name } from '../models/models.js'
import { ApiError } from '../exceptions/ApiError.js';


  export  async function create(req, res, next) {
    try {
      const inputName = req.body.name || ''
      const rank = req.body.rank || ''
      console.log('----------------------------------------', inputName)
      const name = await Name.create({ name: inputName, rank: rank })
      return res.json(name)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  export async function getAll(req, res) {
    const names = await Name.findAll()
    return res.json(names)
  }

  export async function _delete(req, res) {
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

  export async function update(req, res) {
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




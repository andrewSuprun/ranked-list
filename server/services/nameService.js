import { Name } from '../models/models.js'
import { ApiError } from '../exceptions/ApiError.js'

export async function create(req, res) {
  try {
    const { name, rank } = req.body
    console.log(name, rank)
    const createdName = await Name.create({ name, rank })
    console.log(name, '________________nameService create name')
    return createdName
  } catch (error) {
    throw ApiError.BadRequest(error.message)
  }
}

export async function getAll() {
  const names = await Name.findAll({
    order: [['rank', 'ASC']]
  })
  return names
}

export async function getOne(req, res) {
  try {
    const id = req.params.id
    const name = await Name.findOne({
      where: { id },
    })
    return res.json(name)
  } catch (error) {
    ApiError.BadRequest(error.message)
  }
}

export async function _delete(req, res) {
  try {
    const id = req.params.id
    await Name.destroy({
      where: { id },
    })
    res.sendStatus(204)
  } catch (error) {
    ApiError.BadRequest(error.message)
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
  } catch (error) {
    ApiError.BadRequest(error.message)
  }
}

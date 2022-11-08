import { Name, User } from '../models/models.js'
import { ApiError } from '../exceptions/ApiError.js'
import { normalize } from '../helpers/normalize.js'
import { userService } from '../services/userService.js';


export async function create(req, res) {
  try {
    const { name, rank } = req.body
    console.log(name, rank)
    const { id : userId } = await userService.getByToken()
    const createdName = await Name.create({ name, rank, userId })
    console.log(name, '________________nameService create name')
    return createdName
  } catch (error) {
    throw ApiError.BadRequest(error.message)
  }
}

export async function getAll() {
  const { id : userId } = await userService.getByToken()
  const names = await Name.findAll({
    where:{
      userId
    }
  },
    {
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

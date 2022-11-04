import { create, update, _delete, getAll, getOne } from '../services/nameService.js';


  export  async function createName(req, res) {
      const name = await create(req, res);
      return res.json(name)

  }

  export async function getAllNames(req, res) {
    const names = await getAll(req, res)
    return res.json(names)
  }

  export async function getOneName(req, res) {
    const names = await getOne(req, res)
    return res.json(names)
  }

  export function _deleteName(req, res) {
      _delete (req, res)
      res.sendStatus(204)
  }

  export async function updateName(req, res ) {
      await update(req, res, )
      res.sendStatus(204)
  }




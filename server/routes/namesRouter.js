import Router from 'express'
const router = new Router()
import {
  createName,
  getAllNames,
  updateName,
  _deleteName,
  getOneName,
  updateManyNames,
} from '../controllers/nameController.js'
import { catchError } from '../middlewares/catchError.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { userService } from '../services/userService.js'

router.post('/', catchError(createName))

router.get('/', catchError(authMiddleware), catchError(getAllNames))

router.get('/names/:id', getOneName)

router.put('/names/:id', updateName)

router.put('/', updateManyNames)

router.delete('/names/:id', _deleteName)

router.get('/user', userService.getByToken)

export default router

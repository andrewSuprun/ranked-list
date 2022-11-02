import Router from 'express'
const router = new Router()
import { create, getAll, update, _delete } from '../controllers/nameController.js'
import { catchError } from '../middlewares/catchError.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

router.post('/', catchError(authMiddleware), catchError(create))

// router.get('/', catchError(authMiddleware), catchError(getAll))
router.get('/', getAll)

router.put('/names/:id',catchError(authMiddleware), catchError(update))

router.delete('/names/:id',catchError(authMiddleware), catchError(_delete))

// router.post('/login', user.create)
export default router

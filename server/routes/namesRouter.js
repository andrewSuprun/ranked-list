import Router from 'express'
const router = new Router()
import { createName, getAllNames, updateName, _deleteName, getOneName } from '../controllers/nameController.js'
import { catchError } from '../middlewares/catchError.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

router.post('/', catchError(createName))
// router.post('/', create)

// router.get('/', catchError(authMiddleware), catchError(getAllNames))
router.get('/', getAllNames)

router.get('/names/:id', getOneName)


// router.put('/names/:id', catchError(authMiddleware), catchError(updateName))
router.put('/names/:id', updateName)

// router.delete('/names/:id', catchError(authMiddleware), catchError(_deleteName))
router.delete('/names/:id', _deleteName)


export default router

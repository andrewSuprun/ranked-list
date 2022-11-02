import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import { sequelize } from './db.js'

import { authRouter } from './routes/authRouter.js'

import { errorMiddleware } from './middlewares/errorMiddleware.js'
import router from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(authRouter)
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  // DB-connection
  try {
    await sequelize.authenticate(), await sequelize.sync()
    console.log('1')
  } catch (e) {
    console.log(e)
  }
}

start()

app.listen(PORT, () => console.log(`List app listening on port ${PORT}!`))

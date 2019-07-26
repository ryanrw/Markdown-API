import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//
import * as homeController from './controllers/home'
import * as apiController from './controllers/api'

const app = express()

/** setup configurations */
app.set('port', process.env.PORT || 8080)
app.use(cors())

app.get('/', homeController.index)
app.get('/test', apiController.test)

export default app

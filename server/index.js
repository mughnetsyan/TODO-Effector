import express from 'express'
import cors from 'cors'

import { router as tasksRouter } from './modules/tasks/index.js'

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors('http://localhost:5173/'))
app.use(express.json())
app.use('/api', tasksRouter)


app.listen(PORT, () => console.log(`\nserver is working on port ${PORT}`))
import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllTasks } from "./src/tasks.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tasks', getAllTasks)
// app.post('/tasks', )
// app.patch('tasks/:taskId')

export const api = functions.https.onRequest(app)


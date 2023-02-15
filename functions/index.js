import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addTask, getAllTasks, updateTask } from "./src/tasks.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tasks', getAllTasks)
app.post('/tasks', addTask)
app.patch('tasks/:taskId', updateTask)

export const api = functions.https.onRequest(app)
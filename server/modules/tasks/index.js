import { Router } from "express"

import { TasksController } from "./tasks.controller.js"

const controller = new TasksController()

export const router = new Router()

router.get('/tasks', controller.getTasks)
router.patch('/tasks/toggle/:id', controller.toggleTask)
router.patch('/tasks/edit/:id', controller.editTask)
router.post('/tasks', controller.createTask)
router.delete('/tasks/:id', controller.deleteTask)
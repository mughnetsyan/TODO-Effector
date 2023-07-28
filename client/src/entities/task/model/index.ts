import { createEvent, createStore, forward, restore, sample } from "effector"

import { appStarted } from "shared/config"
import { LIMIT } from "shared/api"

import { $currentPage } from "features/pagination"
import { createTaskMutation, deleteTaskMutation, getTasksQuery, toggleTaskMutation } from "../api"
import { CreateTaskDto, DeleteTaskDto, TaskModel, ToggleTaskDto } from "./types"


export const taskCreated =  createEvent<CreateTaskDto>()
export const taskToggled = createEvent<ToggleTaskDto>()
export const taskDeleted = createEvent<DeleteTaskDto>()

export const $tasks = createStore<TaskModel[]>([])

sample({
    clock: [
        appStarted,
        $currentPage.updates,
        createTaskMutation.finished.success, 
        toggleTaskMutation.finished.success, 
        deleteTaskMutation.finished.success
    ],
    source: $currentPage,
    fn: (page) => ({page, limit: LIMIT}),
    target: getTasksQuery.start
})

sample({
    clock: taskCreated,
    filter: ({text}) => text.trim().length > 0,
    fn: ({text}) => ({text: text.trim()}),
    target: createTaskMutation.start
})


sample({
    clock: taskToggled,
    target: toggleTaskMutation.start
})

sample({
    clock: taskDeleted,
    target: deleteTaskMutation.start
})  



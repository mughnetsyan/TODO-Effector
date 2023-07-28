import { createJsonMutation, createJsonQuery, declareParams, update } from "@farfetched/core"

import { getRequestPath } from "shared/api"

import { taskContract, tasksContract } from "./contract"
import { CreateTaskDto, DeleteTaskDto, GetTasksDto, ToggleTaskDto } from "../model/types"


export const getTasksQuery = createJsonQuery({
    params: declareParams<GetTasksDto>(),
    request: {
        url: getRequestPath('tasks'),
        method: 'GET',
        query: ({page, limit}) => ({page, limit}) 
    },
    response: {
        contract: tasksContract,
    }
})

export const createTaskMutation = createJsonMutation({
    params: declareParams<CreateTaskDto>(),
    request: {
        url: getRequestPath('tasks'),
        method: 'POST',
        body: ({text}) => ({text})
    },
    response: {
        contract: taskContract
    }
})

export const toggleTaskMutation = createJsonMutation({
    params: declareParams<ToggleTaskDto>(),
    request: {
        url: ({id}) => getRequestPath(`tasks/toggle/${id}`),
        method: 'PATCH'
    },
    response: {
        contract: taskContract
    }
})

export const deleteTaskMutation = createJsonMutation({
    params: declareParams<DeleteTaskDto>(),
    request: {
        url: ({id}) => getRequestPath(`tasks/${id}`),
        method: 'DELETE'
    },
    response: {
        contract: taskContract
    }
})
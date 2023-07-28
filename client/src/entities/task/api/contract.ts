import { type Contract } from '@farfetched/core'

import { GetTasksModel, TaskModel } from '../model/types'


export const tasksContract: Contract<unknown, GetTasksModel> = {
    isData: (data): data is GetTasksModel => true, 
    getErrorMessages: () => ['error']
}

export const taskContract: Contract<unknown, TaskModel> = {
    isData: (data): data is TaskModel => true, 
    getErrorMessages: () => ['error']
}
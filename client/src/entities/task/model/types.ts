export interface TaskModel {
    id: string,
    text: string,
    completed: boolean
}

export interface GetTasksModel {
    tasks: TaskModel[],
    pagesCount: number
}

export interface GetTasksDto {
    page: number,
    limit: number
}

export interface CreateTaskDto {
    text: string
}

export interface ToggleTaskDto {
    id: string
}

export interface DeleteTaskDto {
    id: string
}
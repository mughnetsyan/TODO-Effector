import { memo } from 'react'

import clsx from 'clsx'

import { TaskModel } from "entities/task"

import { TaskCheckbox } from "features/task-checkbox"
import { DeleteTaskButton } from "features/delete-task-button"
import { ShowTaskModalButton } from 'features/show-task-modal-button'

import styles from './task.module.css'


export const Task = memo(({id, text, completed}: TaskModel) => {
    return (
        <div className={styles.item}>
            
            <TaskCheckbox id={id} completed={completed}/>

            <div className={styles.info}>
                <h1 className={clsx(styles.title, completed && styles.linethrough)}>{text}</h1>
            </div>
            
            <ShowTaskModalButton id={id}/>

            <DeleteTaskButton id={id}/>
        </div>
    )
})
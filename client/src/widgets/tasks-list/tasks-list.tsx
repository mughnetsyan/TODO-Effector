import { useList } from "effector-react"

import { Task } from "entities/task"
import { $tasks } from 'entities/task'

import { Container } from "shared/ui/container"

import styles from './tasks-list.module.css'


export const TasksList = () => {

    const tasks = useList($tasks, {
        fn: ({id, text, completed}) => <Task text={text} id={id} completed={completed} key={id}/>,
        placeholder: 'No tasks anymore',
    })


    console.log();
    

    return (
        <div className={styles.tasks}>
            <Container>
                <h1 className={styles.title}>My Tasks</h1>

                <div className={styles.list}>
                    {tasks}
                </div>
            </Container>
        </div>
    )
}
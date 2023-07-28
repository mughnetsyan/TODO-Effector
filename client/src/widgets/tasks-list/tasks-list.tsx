import { useUnit } from "effector-react"

import { Pagination } from "features/pagination/ui/pagination"

import { Task } from "widgets/task"
import { getTasksQuery } from "entities/task/api"

import { Container } from "shared/ui/container"

import styles from './tasks-list.module.css'



export const TasksList = () => {

    const {data} = useUnit(getTasksQuery)

    const condition =  data?.tasks && data.tasks.length > 0

    return (
        <div className={styles.tasks}>
            <Container>
                <div>
                    <h1 className={styles.title}>My Tasks</h1>
                    <Pagination />
                </div>

                <div className={styles.list}>
                    {
                        condition
                        ? data.tasks.map(({id, text, completed}) => <Task text={text} id={id} completed={completed} key={id}/>)
                        : 'No tasks anymore'
                    }
                </div>
            </Container>
        </div>
    )
}
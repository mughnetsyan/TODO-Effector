import { AddTaskForm } from "features/add-task-form"

import { Container } from "shared/ui/container"

import styles from './header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1 className={styles.title}>TODO</h1>
                <AddTaskForm />
            </Container>
        </header>
    )
}
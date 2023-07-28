import { FormEvent, useRef } from 'react'

import { taskCreated } from 'entities/task'

import { FormInput } from 'shared/ui/form-input'
import { FormButton } from 'shared/ui/form-button'

import styles from './add-task-form.module.css'

import plusImg from 'shared/assets/images/Vector.svg'



export const AddTaskForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        if (inputRef.current) {
            taskCreated({text: inputRef.current.value})

            inputRef.current.value = ''
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <FormInput ref={inputRef} type="text" className={styles.input} placeholder="Enter task..."/>
            <FormButton type='submit' className={styles.btn}>
                <img src={plusImg} className={styles.img} />
                Create new task
            </FormButton>
        </form>
    )
}
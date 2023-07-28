import { FormEvent, useRef } from "react"


import { FormInput } from "shared/ui/form-input"
import { FormButton } from "shared/ui/form-button"

import styles from './edit-task-form.module.css'



interface Props {
    id: string
}


export const EditTaskForm = ({id}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        if(inputRef.current) {
            
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <FormInput ref={inputRef} type="text" className={styles.input} placeholder="Enter task..."/>
            <FormButton type='submit' className={styles.btn}>
                Edit
            </FormButton>
        </form>
    )
}
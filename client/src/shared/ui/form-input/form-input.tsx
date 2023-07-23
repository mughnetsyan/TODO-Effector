import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './form-input.module.css'


interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

type Ref = HTMLInputElement


export const FormInput = forwardRef<Ref, Props>(({className, ...props}, ref) => {
    return (
        <input ref={ref} className={clsx(styles.input, className)} {...props}/>
    )
})
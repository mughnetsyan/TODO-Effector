import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './form-button.module.css'


interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode
}

type Ref = HTMLButtonElement


export const FormButton = forwardRef<Ref, Props>(({children, className, ...props}, ref) => {
    return (
        <button className={clsx(styles.btn, className)} ref={ref} {...props}>
            {children}
        </button>
    )
})
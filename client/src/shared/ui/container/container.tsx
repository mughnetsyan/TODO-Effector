import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './container.module.css'


interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
}

type Ref = HTMLDivElement


export const Container = forwardRef<Ref, Props>(({children, className, ...props}, ref) => {
    return (
        <div className={clsx(styles.container, className)} ref={ref} {...props}>
            {children}
        </div>
    )
})
import { useStore } from 'effector-react'

import { $modalOpened, $modalSlot, $modalTitle, modalClosed } from '../model'

import styles from './modal.module.css'

import closeImg from 'shared/assets/images/Vector-5.svg'

export const Modal = () => {

    const opened = useStore($modalOpened)
    const slot = useStore($modalSlot)
    const title = useStore($modalTitle)

    
    if(!opened) {
        return
    }



    return (
        <div className={styles.mask} onClick={() => modalClosed()}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>

                    <button className={styles.btn} onClick={() => modalClosed()}>
                        <img src={closeImg} alt="" />
                    </button>
                </div>

                <div className={styles.body}>
                    {slot && slot()}
                </div>
            </div>
        </div>
    )
}
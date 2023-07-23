import { TaskButton } from 'shared/ui/task-button'

import editImg from 'shared/assets/images/Vector-1.svg'


interface Props {
    id: string
}


export const ShowTaskModalButton = ({id}: Props) => {
    return (
        <TaskButton>
            <img src={editImg} alt="" />
        </TaskButton>
    )
}
import { TaskButton } from 'shared/ui/task-button'

import deleteImg from 'shared/assets/images/Vector-2.svg'
import { taskDeleted } from 'entities/task'


interface Props {
    id: string
}


export const DeleteTaskButton = ({id}: Props) => {


    function deleteHandler() {
        taskDeleted({id})
    }

    return (
        <TaskButton onClick={deleteHandler}>
            <img src={deleteImg}/>
        </TaskButton>
    )
}
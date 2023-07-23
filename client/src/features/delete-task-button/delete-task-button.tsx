import { TaskButton } from 'shared/ui/task-button'

import deleteImg from 'shared/assets/images/Vector-2.svg'


interface Props {
    id: string
}


export const DeleteTaskButton = ({id}: Props) => {


    function clickHandler() {
        
    }

    return (
        <TaskButton onClick={clickHandler}>
            <img src={deleteImg}/>
        </TaskButton>
    )
}
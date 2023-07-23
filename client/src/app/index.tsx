
import { Header } from 'widgets/header'
import { TasksList } from 'widgets/tasks-list'

import './index.css'



export const App: React.FC = () => {
  return (
    <>
      <Header />
      <TasksList />

    </>
  )
}

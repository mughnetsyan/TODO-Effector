import { createPortal } from 'react-dom'

import { Header } from 'widgets/header'
import { TasksList } from 'widgets/tasks-list'

import { Modal } from 'shared/ui/modal'
import { appStarted } from 'shared/config'

import './index.css'



export const App = () => {
  return (
    <>
      <Header />
      <TasksList />

      {
        createPortal(
          <Modal />,
          document.body
        )
      }
    </>
  )
}


appStarted()
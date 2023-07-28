import { createEvent, createStore, restore } from "effector"

// export type ModalSlotModel = React.ReactElement


export type ModalSlotsModel = Record<string, React.ReactElement>

const defaultTitle = 'Modal'

export const modalOpened = createEvent()
export const modalClosed = createEvent()

export const slotChanged = createEvent<string>()
export const titleChanged = createEvent<string>()

export const $modalOpened = createStore<boolean>(false)
export const $modalSlot = restore(slotChanged, null)
export const $modalTitle = restore(titleChanged, defaultTitle)

$modalOpened
    .on(modalOpened, () => true)
    .reset(modalClosed)
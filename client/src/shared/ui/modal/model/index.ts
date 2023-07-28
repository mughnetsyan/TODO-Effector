import { createEvent, createStore, restore } from "effector"

export type ModalSlotModel = (() => JSX.Element) | null

const defaultTitle = 'Modal'

export const modalOpened = createEvent()
export const modalClosed = createEvent()

export const slotChanged = createEvent<ModalSlotModel>()
export const titleChanged = createEvent<string>()

export const $modalOpened = createStore<boolean>(false)
export const $modalSlot = restore(slotChanged, null)
export const $modalTitle = restore(titleChanged, defaultTitle)

$modalOpened
    .on(modalOpened, () => true)
    .reset(modalClosed)
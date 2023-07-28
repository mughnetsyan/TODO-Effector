import { createEvent, createStore, sample } from "effector"

import { getTasksQuery } from "entities/task"


export const currentPageIncreased = createEvent<void>()
export const currentPageDecreased = createEvent<void>()

export const currentPageChanged = createEvent<number>()

export const $pagesCount = createStore<number>(1)
export const $currentPage = createStore<number>(1)

$pagesCount
    .on(getTasksQuery.finished.success, (_, {result}) => result.pagesCount)

$currentPage
    .on(currentPageDecreased, (state) => state === 1 ? state : state - 1)


sample({
    clock: currentPageIncreased,
    source: {
        currentPage: $currentPage,
        pagesCount: $pagesCount
    },
    filter: ({currentPage, pagesCount}) => currentPage < pagesCount,
    fn: ({currentPage}) => currentPage + 1,
    target: $currentPage
})


sample({
    clock: currentPageChanged,
    source: {
        currentPage: $currentPage,
        pagesCount: $pagesCount
    },
    filter: ({currentPage, pagesCount}, payload) => payload !== currentPage && payload > 0 && payload <= pagesCount,
    fn: (_, payload) => payload,
    target: $currentPage
})
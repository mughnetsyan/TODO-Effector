import { useStore } from 'effector-react'

import { PaginationSideButton } from './pagination-side-button'

import { currentPageChanged, currentPageIncreased, currentPageDecreased, $currentPage } from '../model'

import styles from './pagination.module.css'


interface Props {
    
}


export const Pagination = ({}: Props) => {

    const currentPage = useStore($currentPage)

    return (
        <div>
            <PaginationSideButton onClick={() => currentPageDecreased()}>
                {"<"}
            </PaginationSideButton>
            
            {currentPage}

            <PaginationSideButton onClick={() => currentPageIncreased()}>
                {">"}
            </PaginationSideButton>
        </div>
    )
}
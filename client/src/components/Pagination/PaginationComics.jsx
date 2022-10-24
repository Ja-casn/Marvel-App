import React from 'react'
import styles from './pagination.module.css'

export const PaginationComics = ({ currentPage, setCurrentPage, cardsPerPage, comics }) => {
    let numberOfPages = []
    let maxPages = Math.ceil((comics) / cardsPerPage)


    for (let i = 1; i <= maxPages; i++) {
        numberOfPages.push(i)
    }

    const paginated = (numberOfPages) => {
        setCurrentPage(numberOfPages)
    }

    const prevClick = () => {
        setCurrentPage(currentPage - 1)
    }

    const nextClick = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className={styles.paginated}>
            <button
                className={styles.prevNextButtons}
                disabled={currentPage <= 1}
                onClick={prevClick} >
                <p className={styles.prevNextParaph} > &lt; </p>
            </button>

            {numberOfPages?.map((number) => {
                return <button
                // className={styles.selectedButton}
                    className={number === currentPage ? styles.selectedButtonOff : styles.selectedButton}
                    key={number}
                    onClick={() => paginated(number)} >
                    <p className={styles.prevNextParaph} >{number}</p>
                </button>
            })}

            <button
                className={styles.prevNextButtons}
                disabled={currentPage >= 9}
                onClick={nextClick} >
                <p className={styles.prevNextParaph} > &gt; </p>
            </button>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../Home/home.module.css'
import { PaginationComics } from '../Pagination/PaginationComics'
import MainCardsComics from './comicland'

export const ShowCardsComics = ({ paginated }) => {
  const dispatch = useDispatch()
  const {comics} = useSelector((state) => state.marvelous)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(12)

  console.log(comics)

  const indexOfLastPage = currentPage * cardsPerPage // 12
  const indexOfFirstPage = indexOfLastPage - cardsPerPage // 0

  const cardsPage = comics.slice(
    indexOfFirstPage,
    indexOfLastPage
  )
  
  return (
    <>
      <div className={styles.cardsCharacters}>
        {cardsPage.map((info, key) => {
          return (
            <MainCardsComics
              key={key}
              nameComic={info.title}
              description={info.description}
              thumbnailComic={info.thumbnail}
              pageCount={info.pageCount}
              price={info.price}
            />
          )
        })}
      </div>

      <PaginationComics
      cardsPerPage={cardsPerPage}
      comics={comics.length}
      paginated={paginated}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </>
  )
}

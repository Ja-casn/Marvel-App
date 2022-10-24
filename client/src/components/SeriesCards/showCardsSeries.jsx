import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../Home/home.module.css'
import { PaginationSerie } from '../Pagination/PaginationSeries'
import MainCardsSeries from './seriesland'

export const ShowCardsSeries = ({ paginated }) => {
  const {series} = useSelector((state) => state.marvelous)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(12)

  const indexOfLastPage = currentPage * cardsPerPage // 12
  const indexOfFirstPage = indexOfLastPage - cardsPerPage // 0

  const cardsPage = series.slice(
    indexOfFirstPage,
    indexOfLastPage
  )
  
  return (
    <>
      <div className={styles.cardsCharacters}>
        {cardsPage.map((info, key) => {
          return (
            <MainCardsSeries
              key={key}
              nameSerie={info.title}
              description={info.description}
              thumbnailSerie={info.thumbnail}
              type={info.type}
              startYear={info.startYear}
              endYear={info.endYear}
            />
          )
        })}
      </div>

      <PaginationSerie
      cardsPerPage={cardsPerPage}
      series={series.length}
      paginated={paginated}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </>
  )
}

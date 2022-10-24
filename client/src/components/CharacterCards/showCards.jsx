import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allCharacters } from '../../actions/action-types'
import MainCardsCharacters from './characterCards'
import styles from '../Home/home.module.css'
import { CardsPagination } from '../Pagination/Pagination'

export const ShowCardsCharacters = ({ paginated }) => {
  const dispatch = useDispatch()
  const { characters } = useSelector((state) => state.marvelous)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(12)

  const indexOfLastPage = currentPage * cardsPerPage // 12
  const indexOfFirstPage = indexOfLastPage - cardsPerPage // 0

  const cardsPage = characters.slice(
    indexOfFirstPage,
    indexOfLastPage
  )

  return (
    <>
      <div className={styles.cardsCharacters}>
        {cardsPage.map((info, key) => {
          return (
            <MainCardsCharacters
              key={key}
              idCharacter={info.idcharacter}
              nameCharacter={info.name}
              description={info.description}
              thumbnail={info.thumbnail}
            />
          )
        })}
      </div>

      <CardsPagination
        cardsPerPage={cardsPerPage}
        characters={characters.length}
        paginated={paginated}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

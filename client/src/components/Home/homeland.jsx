import React, { useEffect, useState} from 'react'
import MainCardsCharacters from '../CharacterCards/characterCards'
import styles from './home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { allCharacters } from '../../actions/action-types'
import { CardsPagination } from '../Pagination/Pagination'



export const Homeland = ({ paginated }) => {
  const dispatch = useDispatch()
  const {characters} = useSelector((state) => state.marvelous)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(12)

  const indexOfLastPage = currentPage * cardsPerPage // 12
  const indexOfFirstPage = indexOfLastPage - cardsPerPage // 0

  const cardsPage = characters.slice(
    indexOfFirstPage,
    indexOfLastPage
  )

  useEffect(() => {
    dispatch(allCharacters())
  }, [dispatch, paginated])


  return (
    <div className={styles.mainHome}>

      <div className={styles.cardsCharacters}>
        {cardsPage.map((info, key) => {
          return (
            <MainCardsCharacters
              key={key}
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

    </div>
  )
}


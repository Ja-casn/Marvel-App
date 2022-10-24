import React, { useEffect, useState} from 'react'
import styles from './home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { allCharacters, allComics, allSeries } from '../../actions/action-types'
import { CardsPagination } from '../Pagination/Pagination'
import { AllNavBar } from '../Navbar/Navbar'
import { Loading } from '../Loading/Loading'
import BasicTabs from '../TabsEvent/tabsevent'



export const Homeland = ({ paginated }) => {
  const dispatch = useDispatch()
  const {characters} = useSelector((state) => state.marvelous)

  useEffect(() => {
    dispatch(allCharacters())
    dispatch(allComics())
    dispatch(allSeries())
  }, [dispatch, paginated])

  return characters.length > 0 && characters !== undefined ?(
    <>
      {/* <AllNavBar /> */}
    <div className={styles.mainHome}>
      <BasicTabs />
    </div>
    </>
  ) : <Loading />
}


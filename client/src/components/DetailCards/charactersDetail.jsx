import React, { useEffect } from 'react'
import styles from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { getCharacterById } from '../../actions/action-types'

export const CharacterDetails = () => {
  const dispatch = useDispatch()
  const { characterDetail } = useSelector((state) => state.marvelous)
  console.log(characterDetail)

  let { idCharacter } = useParams()

  useEffect(() => {
    dispatch(getCharacterById(idCharacter))
  }, [dispatch])


  return (
    <div className={styles.mainDetailContainer}>
      <div className={styles.sideDetail}>
        <img src={characterDetail.thumbnail} />
      </div>
      <section className={styles.sectionDetail}>

        {characterDetail.description}
        {characterDetail.name}

      </section>
    </div>
  )
}

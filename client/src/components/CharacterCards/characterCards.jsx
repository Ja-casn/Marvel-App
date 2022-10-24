import React from 'react'
import styles from './cards.module.css'
import { Link } from 'react-router-dom'

const MainCardsCharacters = ({ nameCharacter, thumbnail, idCharacter }) => {
  return (
    <div className={styles.kingContainer}>

      <Link to={`/marv1/character/${idCharacter}`}>
        <div className={styles.borderCard}>
          {/* <figure className={styles.cardBody}> */}
            <img
              src={thumbnail}
            />
            <summary className={styles.summaryName}>
              {nameCharacter}
            </summary>
          {/* </figure> */}
        </div>
      </Link>

    </div>
  )
}

export default MainCardsCharacters
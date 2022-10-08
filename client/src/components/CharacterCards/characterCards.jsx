import React from 'react'
import styles from './cards.module.css'

const MainCardsCharacters = ({ nameCharacter, thumbnail }) => {
  return (
    <div className={styles.kingContainer}>

      <div className={styles.borderCard}>
          <figure className={styles.cardBody}>
            <img
              src={thumbnail}
            />
            <summary className={styles.summaryName}>
              {nameCharacter}
            </summary>
          </figure>
      </div>

    </div>
  )
}

export default MainCardsCharacters
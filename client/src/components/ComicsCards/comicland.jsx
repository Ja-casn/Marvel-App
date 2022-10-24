import React from 'react'
import styles from './comic.module.css'

const MainCardsComics = ({ nameComic, thumbnailComic }) => {
  return (
    <div className={styles.kingContainer}>

      <div className={styles.borderCard}>
            <img
              src={thumbnailComic}
            />
            <summary className={styles.summaryName}>
                {nameComic}
            </summary>
      </div>

    </div>
  )
}

export default MainCardsComics
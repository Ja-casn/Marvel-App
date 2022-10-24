import React from 'react'
import styles from './series.module.css'

const MainCardsSeries = ({ nameSerie, thumbnailSerie }) => {
  return (
    <div className={styles.kingContainer}>

      <div className={styles.borderCard}>
            <img
              src={thumbnailSerie}
            />
            <summary className={styles.summaryName}>
                {nameSerie}
            </summary>
      </div>

    </div>
  )
}

export default MainCardsSeries
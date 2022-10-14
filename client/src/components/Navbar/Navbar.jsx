import React from 'react'
import styles from './navbar.module.css'

export const AllNavBar = () => {
  return (
    <nav className={styles.navBarStyle}>
      <span className={styles.spanHome}>Home</span>
      <ul className={styles.orderList}>
        <button className={styles.listItems}>Characters</button>
        <button className={styles.listItems}>Series</button>
        <button className={styles.listItems}>Comics </button>
      </ul>
    </nav>
  )
}

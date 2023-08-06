import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div>
        <header>
            <h1 className={styles.title}>Sample_Title</h1>
            <p className={styles.subtitle}>subtitle</p>
        </header>
    </div>
  )
}

export default Header
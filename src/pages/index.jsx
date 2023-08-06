import React from 'react'
import Header from './conponents/Header/Header'
import styles from '@/styles/Home.module.css'
import Main from './conponents/Main/Main'
import Side from './conponents/Side/Side'

function index() {
  return (
    <div className={styles.all}>
      <Header />
      <div className={styles.main_all}>
        <Side />
        <Main />
      </div>
    </div>
  )
}

export default index
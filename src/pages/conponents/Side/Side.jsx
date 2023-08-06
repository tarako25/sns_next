import React from 'react'
import styles from './Side.module.css'
import Link from 'next/link'

function Side() {
  return (
    <div className={styles.side}>
      <div className={styles.sidemenu}>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default Side
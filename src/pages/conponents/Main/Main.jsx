import React from 'react'
import styles from './Main.module.css'
import noimg from 'public/imgs/noimg.png' 
import Image from 'next/image'

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.mainbox}>

        {/* 投稿(入力)) */}
        <form className={styles.postbox}>
          <div className={styles.profile_box}>
            <Image src={noimg} className={styles.profile_img}/>
            <div className={styles.profile_name}>Lorem</div>
          </div>
          <input type="text" className={styles.post_msg}/>
          <div className={styles.reaction}>
            <button className={styles.button}>送信</button>
          </div>
        </form>

        {/* 投稿*/}
        <div className={styles.postbox}>
          <div className={styles.profile_box}>
            <Image src={noimg} className={styles.profile_img}/>
            <div className={styles.profile_name}>Lorem</div>
          </div>
          <div className={styles.post_msg}>
            Lorem, ipsum dolor.
          </div>
          <div className={styles.reaction}>
            <div className={styles.ex_fav}>いいね</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main
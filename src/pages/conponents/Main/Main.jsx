import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import noimg from 'public/imgs/noimg.png' 
import Image from 'next/image'

function Main() {
  
  //ロード時の表示 
  const fetchLorad = async() => {
    const response = await fetch('api/hello');
    console.log("ざっこ");
    if(!response.ok){
      console.log("ロード中にエラーが出ました");
    }
    const data = await response.json();
    console.log('全てのレコードを表示', data);
  }

  useEffect(() => {
    fetchLorad();
  }, []); 

  //送信
  const [value, setValue] = useState('');
  const fetchData = async(e, Insert_data) => {
    e.preventDefault();
    const requestBody = {};
    requestBody[Insert_data] = value;

    await fetch('api/hello',{
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    setValue('');
  }
  const enterValue = (e) =>{
    setValue(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainbox}>
        {/* 投稿(入力)) */}
        <div className={styles.postbox}>
          <div className={styles.profile_box}>
            <Image src={noimg} className={styles.profile_img} alt="アイコン"/>
            <div className={styles.profile_name}>Lorem</div>
          </div>
          <input type="text" placeholder="今日の出来事を投稿しよう!" className={styles.post_msg} value={value} onChange={enterValue}/>
          <div className={styles.reaction}>
            <button className={styles.button} onClick={(e) => fetchData(e, 'Insert_data')}>送信</button>
          </div>
        </div>

        {/* 投稿*/}
        <div className={styles.postbox}>
          <div className={styles.profile_box}>
            <Image src={noimg} className={styles.profile_img} alt="アイコン"/>
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
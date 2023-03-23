import styles from '../styles/Home.module.css';
import Image from "next/image";  
import Tweet from '../components/Tweet'
import { useState } from 'react';

function Home() {
  const [message, setMessage] = useState(''); 

  const handleTweet = () => {
    console.log('Twitté !')
    setMessage('')
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCol}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='rettiwT' height="50" width="50"/>
        </div>
      </div>
      <div className={styles.tweetCol}>
        <h2>Home</h2>

        <div className={styles.writeTweet}>
          <input className={styles.inputTweet} type="textarea" placeholder="What's up?"  rows="4" cols="50" maxlength="200" onChange={(e) => setMessage(e.target.value)} 
			value={message}/>
          <div className={styles.tweetSend}>
            <span>{message.length} / 280</span>
            <button className={styles.tweetButton} onClick={() => handleTweet()}>Tweet</button>
          </div>
        </div>

        <Tweet />
        <Tweet />
      </div>
      <div className={styles.trendsCol}>
        <h2>Trends</h2>
      </div>
    </div>
  );
}

export default Home;

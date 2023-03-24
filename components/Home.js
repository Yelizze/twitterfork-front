import styles from '../styles/Home.module.css';
import Image from "next/image";  
import Tweet from '../components/Tweet'
import { useState } from 'react';
import Link from 'next/link';

function Home() {
  const [message, setMessage] = useState(''); 

  let alertLimitCharacters

  if (message.length > 280) {
    alertLimitCharacters = { color: "#F7317C" }
  }

  const handleTweet = () => {
    if (message.length > 280) {
      alert("Arrête d'écrire un pavé !!!!!!!")
    } else {
      setMessage('')
    }

  }

  const handleLogOut = () => {
    console.log('Tu sors !')
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCol}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='rettiwT' height="50" width="50"/>
        </div>
        <div className={styles.logged}>
        <Image src='/profilepic.jpg' alt='nolE' height="50" width="50"/>
        <p> nolE </p>
        <p> @lonE_ksum</p>
        <Link href="/home"><button onClick={() => handleLogOut()}>Logout</button></Link>
        </div>
      </div>
      <div className={styles.tweetCol}>
        <h2>Home</h2>

        <div className={styles.writeTweet}>
          <input 
          className={styles.inputTweet} type="textarea" 
          placeholder="What's up?" rows="4" cols="50" maxlength="330" 
          onChange={(e) => setMessage(e.target.value)} value={message}/>
          <div className={styles.tweetSend}>
            <p><span style={alertLimitCharacters}>{message.length}</span> / 280</p>
            <button type="submit" className={styles.tweetButton} onClick={() => handleTweet()}>Tweet</button>
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

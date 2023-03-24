import styles from '../styles/Home.module.css';
import Image from "next/image";  
import Tweet from '../components/Tweet'
import LastTweet from '../components/LastTweet'
import LogOut from '../components/LogOut';
import { useState } from 'react';
import { deleteAllTweets, newTweet } from '../reducers/tweets';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('');
  const tweets = useSelector((state) => state.tweets.value)


  let alertLimitCharacters;
  if (message.length > 280) {
    alertLimitCharacters = { color: "#F7317C" }
  }

  const handleTweet = () => {
    if (message.length > 280) {
      alert("Arrête d'écrire un pavé !!!!!!!")
    } else {
      dispatch(newTweet({message: message, isLiked: false}))

      setMessage('')
    }
  }

    // Affichage des nouvelles tâches pas importantes
    let addedTweets = tweets.map((data, i) => {  
      return (
        <LastTweet message={data.message} key={i} isLiked={data.isLiked} />
      )}
    );

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCol}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='rettiwT' height="50" width="50"/>
        </div>
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(deleteAllTweets())} />
          <LogOut />
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
        <div className={styles.addTweet}>
          { addedTweets.reverse() }
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

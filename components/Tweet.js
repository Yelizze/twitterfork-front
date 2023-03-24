import styles from '../styles/Tweet.module.css';
import Image from "next/image";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Tweet() {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  let likeStyle;
  const handleLike = () => {
      console.log("J'aime");
      setLikeCount(likeCount + 1);
      setIsLiked(!isLiked)
  }

  if (isLiked) {
      likeStyle = {color: '#F7317C'}
  }

  return (
    <div className={styles.tweetRow}>
        <div className={styles.userHeader}>
            <Image className={styles.profilePic} src='/profilepic.jpg' alt='nolE' height="70" width="70"/>
            <p><span className={styles.userName}>nolE</span> <span className={styles.userTag}>@nolE_ksum</span></p>
        </div>  
        <p>TWEEEEEEEEEEEEEEEEEEET !!! avec un <span className={styles.hashtag}>#hashtag</span></p> 
        <FontAwesomeIcon icon={faHeart} onClick={() => handleLike()} style={likeStyle}/> <span className={styles.likeCount}> {likeCount} </span>
    </div>
  );
}

export default Tweet;

import styles from '../styles/Tweet.module.css';
import Image from "next/image";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTweet } from '../reducers/tweets';

function LastTweet(props) {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);
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
            <Image className={styles.profilePic} src='/profilpic2.png' alt='nolE' height="70" width="70"/>
            <p><span className={styles.userName}>{ username }</span>  <span className={styles.userTag}>@{ username }</span></p>
        </div>  
        <p>{props.message}</p> 
        <FontAwesomeIcon icon={faHeart} onClick={() => handleLike()} style={likeStyle}/> <span className={styles.likeCount}> {likeCount} </span>
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(deleteTweet(props.message))} className={styles.delete}/>
    </div>
  );
}

export default LastTweet;
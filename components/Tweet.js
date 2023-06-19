import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Tweet() {
  const [isComment, setIsComment] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isRetweet, setIsRetweet] = useState(false);
  const [RetweetCount, setRetweetCount] = useState(0);
  let likeStyle;
  const handleLike = () => {
    console.log("J'aime");
    setLikeCount(likeCount + 1);
    setIsLiked(!isLiked);
  };

  if (isLiked) {
    likeStyle = { color: "#F7317C" };
  }

  let CommentStyle;
  const handleComment = () => {
    console.log("J'aime");
    setCommentCount(commentCount + 1);
    setIsComment(!isComment);
  };

  if (isComment) {
    CommentStyle = { color: "#1da1f2" };
  }

  let retweetStyle;
  const handleRetweet = () => {
    console.log("J'aime");
    setRetweetCount(RetweetCount + 1);
    setIsRetweet(!isRetweet);
  };

  if (isRetweet) {
    retweetStyle = { color: "#00BA7C" };
  }

  return (
    <div className={styles.tweetRow}>
      <div className={styles.userHeader}>
        <Image
          className={styles.profilePic}
          src="/profilepic.jpg"
          alt="nolE"
          height="70"
          width="70"
        />
        <p>
          <span className={styles.userName}>nolE</span> <br />
          <span className={styles.userTag}>@nolE_ksum</span>
        </p>
      </div>
      <p>
        Le dev front est bien mieux que le Back{" "}
        <span className={styles.hashtag}>#hashtag</span>
      </p>
      <div className={styles.tweetIcon}>
        <div></div>
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLike()}
            style={likeStyle}
          />
          <span className={styles.likeCount}> {likeCount} </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faRetweet}
            onClick={() => handleRetweet()}
            style={retweetStyle}
          />
          <span className={styles.likeCount}> {RetweetCount} </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

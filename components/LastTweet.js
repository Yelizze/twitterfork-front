import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faComment,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTweet } from "../reducers/tweets";

function LastTweet(props) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isComment, setIsComment] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

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

  const handleDeleteOne = () => {
    dispatch(deleteTweet(props));
  };

  return (
    <div className={styles.tweetRow}>
      <div className={styles.userHeader}>
        <Image
          className={styles.profilePic}
          src="/profilpic2.png"
          alt="nolE"
          height="70"
          width="70"
        />
        <p>
          <span className={styles.userName}>{username}</span> <br />
          <span className={styles.userTag}>. @{username}</span>
        </p>
        <FontAwesomeIcon
          icon={faTrash}
          className={styles.trashIcon}
          onClick={() => handleDeleteOne()}
        />
      </div>
      <p>{props.message}</p>
      <div className={styles.tweetIcon}>
        <div>
          <FontAwesomeIcon
            icon={faComment}
            onClick={() => handleComment()}
            style={CommentStyle}
          />
        </div>
        <div>
          <span className={styles.likeCount}> {likeCount} </span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLike()}
            style={likeStyle}
          />
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

export default LastTweet;

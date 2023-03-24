import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweet() {
  const handleLike = () => {
    console.log("J'aime");
  };

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
          <span className={styles.userName}>nolE</span>{" "}
          <span className={styles.userTag}>@nolE_ksum</span>
        </p>
      </div>
      <p>
        TWEEEEEEEEEEEEEEEEEEET !!! avec un{" "}
        <span className={styles.hashtag}>#hashtag</span>
      </p>
      <FontAwesomeIcon icon={faHeart} onClick={() => handleLike()} />{" "}
      <span className={styles.likeCount}>0</span>
    </div>
  );
}

export default Tweet;

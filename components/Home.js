import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "../components/Tweet";
import LogOut from "../components/LogOut";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [message, setMessage] = useState("");

  let alertLimitCharacters;

  if (message.length > 280) {
    alertLimitCharacters = { color: "#F7317C" };
  }

  const handleTweet = () => {
    if (message.length > 280) {
      alert("Arrête d'écrire un pavé !!!!!!!");
    } else {
      setMessage("");
    }
  };

  const handleLogOut = () => {
    console.log("Tu sors !");
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCol}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="./logo.png" alt="logo" />
          </Link>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faHouse} className={styles.leftIcons} />{" "}
            Accueil
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faHashtag} className={styles.leftIcons} />
            Explorer
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faBell} className={styles.leftIcons} />
            Notification
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.leftIcons} />
            Message
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faBookmark} className={styles.leftIcons} />
            Signets
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faUser} className={styles.leftIcons} />
            Profil
          </span>
          <span className={styles.leftInfos}>
            <FontAwesomeIcon icon={faPlus} className={styles.leftIcons} />
            Plus
          </span>
          <button className={styles.leftBtn}>Tweeter</button>
        </div>
        <LogOut />
      </div>
      <div className={styles.tweetCol}>
        <h2>Home</h2>

        <div className={styles.writeTweet}>
          <input
            className={styles.inputTweet}
            type="textarea"
            placeholder="What's up?"
            rows="4"
            cols="50"
            maxlength="330"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div className={styles.tweetSend}>
            <p>
              <span style={alertLimitCharacters}>{message.length}</span> / 280
            </p>
            <button
              type="submit"
              className={styles.tweetButton}
              onClick={() => handleTweet()}
            >
              Tweet
            </button>
          </div>
        </div>

        <Tweet />
        <Tweet />
      </div>
      <div className={styles.trendsCol}>
        <h2>Trends</h2>
        <div className={styles.trendContainer}>
          <div className={styles.trends}>
            <span>#Hackatweet</span>
            <p>2 Tweets</p>
          </div>
          <div className={styles.trends}>
            <span>#first</span>
            <p>1 Tweet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

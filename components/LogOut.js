import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useSelector } from "react-redux";
import Link from "next/link";

function LogOut(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    console.log(user.username);
    console.log(user.firstname);
  };
  const user = useSelector((state) => state.user.value);
  const username = useSelector((state) => state.user.value.username);
  return (
    <div className={styles.logged}>
      <div className={styles.logoutContainer}>
        <Image src="/profilpic2.jpg" alt="nolE" height="50" width="50" />
        <div className={styles.logoutInfo}>
          <h4 className={styles.logName}>{username}</h4>
          <p> @{user.username}</p>
        </div>
      </div>
      <Link href="/">
        <button onClick={() => handleLogout()}>Logout</button>
      </Link>
    </div>
  );
}

export default LogOut;

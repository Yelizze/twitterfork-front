import styles from '../styles/Tweet.module.css';
import Image from "next/image";  
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/user'
import { useSelector } from 'react-redux';
import Link from "next/link"; 

function LogOut() {
        const username = useSelector((state) => state.user.value.username);
  return (
        <div className={styles.logged}>
                <Image src='/profilepic.jpg' alt='nolE' height="50" width="50"/>
                <p className={styles.logName}> nolE </p>
                <p> @{username}</p>
                <Link href="/login"><button onClick={() => useDispatch(logout())}>Logout</button></Link>
        </div>
  );
}

export default LogOut;



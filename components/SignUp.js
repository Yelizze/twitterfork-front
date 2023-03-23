import React from "react";
import styles from "../styles/SignUp.module.css";
const SignUp = () => {
  return (
    <div className={styles.modalContainer}>
      <img src="./logo.png" alt="" />
      <h2>Create your hackatweet account</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign up</button>
    </div>
  );
};

export default SignUp;

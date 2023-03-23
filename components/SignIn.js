import React from "react";
import styles from "../styles/SignIn.module.css";
const SignIn = () => {
  return (
    <div className={styles.modalContainer}>
      <img src="./logo.png" alt="" />
      <h2>Connect to your account</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign in</button>
    </div>
  );
};

export default SignIn;

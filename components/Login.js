import React from "react";
import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import { Modal } from "antd";

const Login = () => {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpModalVisible(!isSignUpModalVisible);
  };
  const showSignInModal = () => {
    setIsSignInModalVisible(!isSignInModalVisible);
  };

  let modalContent;
  if (isSignUpModalVisible) {
    modalContent = <SignUp />;
  } else if (isSignInModalVisible) {
    modalContent = <SignIn />;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img src="./logo.png" alt="" />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.connection}>
          <img src="./logo.png" alt="logo" />
          <h1>See what's happening</h1>
          <h3>Join Hackatweet today !</h3>

          <div className={styles.btnContainer}>
            <button className={styles.signupBtn} onClick={showSignUpModal}>
              Sign up
            </button>
            <p>Already have an account?</p>
            <button className={styles.signinBtn} onClick={showSignInModal}>
              Sign in
            </button>
          </div>
        </div>
      </div>

      {isSignUpModalVisible && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            visible={isSignUpModalVisible}
            closable={false}
            footer={null}
          >
            {modalContent}
          </Modal>
        </div>
      )}

      {isSignInModalVisible && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            visible={isSignInModalVisible}
            closable={false}
            footer={null}
          >
            {modalContent}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Login;

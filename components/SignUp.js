import React from "react";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import Link from "next/link";

const SignUp = () => {
  const dispatch = useDispatch();
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  const handleRegister = () => {
    console.log("error");
    fetch("twitterfork-back.vercel.app/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstName,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("connectay !");
          dispatch(
            login({
              username: signUpUsername,
              token: data.token,
              firstname: signUpFirstName,
            })
          );
          setSignUpFirstName("");
          setSignUpUsername("");
          setSignUpPassword("");
          location.assign("twitterfork-back.vercel.app/home");
        }
      });
  };

  return (
    <div className={styles.modalContainer}>
      <img src="./logo.png" alt="" />
      <h2>Create your hackatweet account</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setSignUpFirstName(e.target.value)}
        value={signUpFirstName}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />

      <button onClick={() => handleRegister()}>Sign up</button>
    </div>
  );
};

export default SignUp;

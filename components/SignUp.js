import React from "react";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import Link from "next/link";

const SignUp = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  const handleRegister = () => {
    console.log("click");
    fetch("http://localhost:3000/users/signup", {
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
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpFirstName("");
          setSignUpUsername("");
          setSignUpPassword("");
        } else {
          console.log("error");
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
      <Link href="/home">
        <button onClick={() => handleRegister()}>Sign up</button>
      </Link>
    </div>
  );
};

export default SignUp;

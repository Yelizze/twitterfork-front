import React from "react";
import styles from "../styles/SignIn.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user"


const SignIn = () => {
  const dispatch = useDispatch();
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          console.log('connecté !')
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					// setIsModalVisible(false)
				}
			});
	};

  return (
    <div className={styles.modalContainer}>
      <img src="./logo.png" alt="" />
      <h2>Connect to your account</h2>
      <input type="text" placeholder="Username" onChange={(e) => setSignInUsername(e.target.value)} 
			value={signInUsername}/>
      <input type="password" placeholder="Password"  onChange={(e) => setSignInPassword(e.target.value)} 
			value={signInPassword}/>
      <button onClick={() => handleConnection()}>Sign in</button>
    </div>
  );
};

export default SignIn;

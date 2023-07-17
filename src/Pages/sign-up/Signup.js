import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/auth";
import "firebase/database";

// Initialize Firebase with your configuration
const firebaseConfig = {
  // Your Firebase config object here


  apiKey: "AIzaSyD_ZTkkSPzOrXPA5n_lTcX0U3q16OS-_VU",
  authDomain: "crime-reporting-system-c4a7b.firebaseapp.com",
  projectId: "crime-reporting-system-c4a7b",
  storageBucket: "crime-reporting-system-c4a7b.appspot.com",
  messagingSenderId: "781871322055",
  appId: "1:781871322055:web:35597bab711f0f47f0bfe2",
  measurementId: "G-08E8GHRL5K",
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = firebase.firestore();

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    // Create a new user with email and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        // Store additional user details in the database
        // firebase.database().ref("policeMen").push({
        //   name,
        //   email,
        //   userId: user.uid,
        // });
        // Redirect to the authentication page


        await db.collection("policeMen").doc(user.id).set({
          name,
          email,
          userId: user.uid,
        });
        // window.location.href = "/authentication";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Police Men Signup</h1>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
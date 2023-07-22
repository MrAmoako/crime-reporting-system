import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // Write additional user data to the database
      await firebase.database().ref(`users/${user.uid}`).set({
        email: user.email,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });

      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

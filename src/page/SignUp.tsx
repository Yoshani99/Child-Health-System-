import React, { useState } from "react";
import "../CSS/SIgnupPage.css";
import img from "../assets/Img/1.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../functions/src/firebase";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Email & Password Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user display name
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      navigate("/"); // change route if needed
    } catch (err: any) {
      setError(err.message);
    }
  };

  // 🔹 Google Signup
  // const handleGoogleSignup = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //     navigate("/dashboard");
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };

  return (
    <div className="signup-container">
      {/* Left Image */}
      <div className="signup-image">
        <img src={img} alt="Baby" />
      </div>

      {/* Right Form */}
      <div className="signup-form">
        <div className="logo"></div>

        <h2>
          Welcome to Intelligent Child Health & <br />
          Development Record System
        </h2>

        <p className="subtitle">
          Please sign-up to your account and start the adventure
        </p>

        <form onSubmit={handleSignup}>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="signup-btn">
            SignUp
          </button>
        </form>

        <p className="login-text">
          <button onClick={() => navigate("/")}>
            Already have an account? Please <span>Signin</span>
          </button>
        </p>

        {/* <button className="google-btn" onClick={handleGoogleSignup}>
          Sign Up with Google
        </button> */}
      </div>
    </div>
  );
};

export default SignupPage;

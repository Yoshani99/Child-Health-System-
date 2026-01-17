import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LoginPage.css";
import img from "../assets/Img/1.png";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* Left Image Section */}
      <div className="login-left">
        <img src={img} alt="Baby" />
      </div>

      {/* Right Login Section */}
      <div className="login-right">
        <div className="login-box">
          {/* Logo */}
          <div className="login-logo">
            <div>I</div>
          </div>

          <h2 className="login-heading">
            Welcome to Intelligent Child Health & Development Record System.....
          </h2>
          <p className="login-text">
            Please sign-in to your account and start the adventure
          </p>

          {/* Form */}
          <form className="login-form">
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button type="submit">SignIn</button>
          </form>

          {/* Extra Links */}
          <div className="extra-links">
            <a href="#">Forgot Password?</a>
          </div>

          <div className="extra-links">
            No account? Please{" "}
            <button
              className="signup-link"
              onClick={() => navigate("/signup")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                font: "inherit",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Google Sign In */}
          <button className="google-signin">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

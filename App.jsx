import React from "react";
import "./App.css";
import logo from "./assets/x-logo.png"; // Ensure the logo path is correct.

const App = () => {
  return (
    <>
      {/* Main Content */}
      <div className="container">
        {/* Left Section with X Logo */}
        <div className="left-section">
          <img src={logo} alt="X Logo" />
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Page Header */}
          <div className="page-header">
            <h1>Happening now</h1>
            <h2>Join Today.</h2>
          </div>

          {/* Sign-Up Buttons */}
          <button className="sign-up-google">
            <i className="fab fa-google"></i> Sign up with Google
          </button>
          <button className="sign-up-apple">
            <i className="fab fa-apple"></i> Sign up with Apple
          </button>
          <p>or</p>
          <button className="create-account">Create an account</button>

          {/* Terms and Privacy Policy Text */}
          <p className="terms-text">
            By signing up, you agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
          </p>

          {/* Sign-In Link */}
          <p className="sign-in">
            Already have an account?{" "}
            <a href="#" className="sign-in-link">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="page-footer">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Download the X app</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Ads info</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Brand Resources</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">X for Business</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Directory</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
        {/* Copyright Text */}
        <div className="footer-copyright">
          © 2024 X Corp.
        </div>
      </footer>
    </>
  );
};

export default App;

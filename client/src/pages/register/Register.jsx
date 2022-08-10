import "./register.css";
import React from "react";
import { ADD_PROFILE } from '../utils/mutations';
import { useMutation } from "@apollo/client";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CodeSniper</h3>
          <span className="loginDesc">
            CodeSniper is your tool as a software developer to share code to your friends. 
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input name="username" placeholder="Username" className="loginInput" />
            <input name="email" placeholder="Email" className="loginInput" />
            <input name="password" placeholder="Password" className="loginInput" />
            <input name="passwordAgain" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

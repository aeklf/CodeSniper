import "./login.css";
import React, {useState} from "react";
import {LOGIN_USER} from '../../utils/mutations';
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';

const LoginForm = () => {

  const [userFormData, setUserFormData] = useState({email: '', password: '' });
  const [login, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserFormData({...userFormData, [name]: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const {data} = await login({
        variables: userFormData,
      });
      Auth.login(data.login.token);
    }catch (err) {
      console.error(err.message);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  }

  const createAccountClick = (event) => {
    event.preventDefault();
    window.location.assign('/signup');
  }

  return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">CodeSniper</h3>
            <span className="loginDesc">
            Post your code snippets and share them with your friends.
          </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <form>
                <input type="text" name="email" placeholder="Email" className="loginInput" onChange={handleInputChange} value={userFormData.email}/>
                <input type="password" name="password" placeholder="Password" className="loginInput" onChange={handleInputChange} value={userFormData.password}/>
                <button type="submit" className="loginButton" onClick={handleFormSubmit}>Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton" onClick={createAccountClick}>
                  Create a New Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginForm;

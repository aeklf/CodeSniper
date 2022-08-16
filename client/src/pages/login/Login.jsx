import "./login.css";
import React, {useState} from "react";
import {LOGIN_USER} from '../../utils/mutations';
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import {Alert} from 'react-bootstrap';


const LoginForm = () => {

  const [showAlert, setShowAlert] = useState(false);

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
      setShowAlert(true);
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
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your login credentials!
              </Alert>
                <input type="text" name="email" placeholder="Email" className="loginInput" onChange={handleInputChange} value={userFormData.email}/>
                <input type="password" name="password" placeholder="Password" className="loginInput" onChange={handleInputChange} value={userFormData.password}/>
                <div>
                <button type="submit" className="loginButton" onClick={handleFormSubmit}>Welcome back! (Login)</button>
                {/* <span className="loginForgot">Forgot Password?</span> */}
                <button className="loginRegisterButton" onClick={createAccountClick}>
                  First-timer? Create a New Account ☺
                </button>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginForm;

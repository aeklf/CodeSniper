import "./register.css";
import React, {useState} from "react";
import { ADD_PROFILE } from '../../utils/mutations';
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';

const SignupForm = () => {

  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [addProfile, {error}] = useMutation(ADD_PROFILE);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserFormData({...userFormData, [name]:value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const {data} = await addProfile({
        variables: userFormData
      });
      Auth.login(data.addProfile.token);
    }catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  }

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
              <form>
                <input type='text' name="username" placeholder="Username" className="loginInput" onChange={handleInputChange} value={userFormData.username}/>
                <input type='text' name="email" placeholder="Email" className="loginInput" onChange={handleInputChange} value={userFormData.email}/>
                <input type='password' name="password" placeholder="Password" className="loginInput" onChange={handleInputChange} value={userFormData.password}/>
                <button type='submit' className="loginButton" onClick={handleFormSubmit}>Sign Up</button>
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;
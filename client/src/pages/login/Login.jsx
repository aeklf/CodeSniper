import "./login.css";

export default function Login() {
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
            <input name="Email" placeholder="Email" className="loginInput" />
            <input name="Password" placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

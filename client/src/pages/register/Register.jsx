import "./register.css";

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
            <input name="Username" placeholder="Username" className="loginInput" />
            <input name="Email" placeholder="Email" className="loginInput" />
            <input name="Password" placeholder="Password" className="loginInput" />
            <input name="PasswordAgain" className="loginInput" />
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

// Source: https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap
import "./logInSignUp.css";


export default function Header() {
    return (
    <div>
        <div className="headerTitles">
            <span className="headerTitleSm">social media application</span>
            <span className="headerTitleLg">Los Delfines</span>
            </div>

        {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        /> */}
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Please enter Email address</label>
                        <input 
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        />
                    </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"/>
        </div>
        <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </div>
        <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
        </p>
        </div>
    </form>
    </div>
        


    </div>
    );
}

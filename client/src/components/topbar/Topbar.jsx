import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./topbar.css";
import Auth from "../../utils/auth";

export default function Topbar() {
    const user = Auth.loggedIn();
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">

                    <li className="topListItem">
                        {/* Navigates you to the HOME page */}
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>

                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div><input className="searchBar" type="text" placeholder="Search here"/>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">

                            <Link className="link" to="/login">
                                LOGIN
                            </Link>

                        </li>
                        <li className="topListItem">

                            <Link className="link" to="/register">
                                REGISTER
                            </Link>

                        </li>
                    </ul>
                )}

                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </div>
    );
}
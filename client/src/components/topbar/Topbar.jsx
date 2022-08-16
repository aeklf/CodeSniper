import { Link } from "react-router-dom";
import "./topbar.css";
import Auth from "../../utils/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
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

                    {user &&
                        <li className="topListItem" onClick={Auth.logout}>
                            LOGOUT
                        </li>
                    }
                </ul>
            </div>
            <div><input className="searchBar" type="text" placeholder="Search here"/>
            </div>
            <div className="topRight">
                {user ? (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/profile">
                                <img
                                    className="topImg"
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/write">
                                <FontAwesomeIcon icon={faSquarePlus} />
                            </Link>
                        </li>
                    </ul>

                ) : (
                    <ul className="topList">
                        <li className="topListItem">

                            <Link className="link" to="/login">
                                LOGIN
                            </Link>

                        </li>
                        <li className="topListItem">

                            <Link className="link" to="/signup">
                                REGISTER
                            </Link>

                        </li>
                    </ul>
                )}

            </div>
        </div>
    );
}

export default Topbar;
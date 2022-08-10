import "bootstrap/dist/css/bootstrap.min.css"

//Components 
import Topbar from "./components/topbar/Topbar";
import LogInSignUp from "./components/logInSignUp/LogInSignUp";

//Pages
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

//Worng old routes 
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";

//Proper register/login page
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>

      {/* Components */}
      {/* <Topbar /> */}


      <Register />
      {/* <Login /> */}


      {/* <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch> */}


    </Router>
  );
}

export default App;

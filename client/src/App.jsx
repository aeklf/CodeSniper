import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import "bootstrap/dist/css/bootstrap.min.css"

//Components 
import Topbar from "./components/topbar/Topbar";

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

import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const currentUser = true;
  return (
    <ApolloProvider client = { client }>
      <Router>
        {/* Components */}
        {/* <Topbar /> */}

        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Register />}
          />
          <Route
            path='/write'
            element={<Write />}
          />
        </Routes>
        

        {/*<Login />*/}
        {/*<Register />*/}

        {/*{ <Switch>*/}
        {/*  <Route exact path="/">*/}
        {/*    <Homepage />*/}
        {/*  </Route>*/}
        {/*  <Route path="/posts">*/}
        {/*    <Homepage />*/}
        {/*  </Route>*/}
        {/*  <Route path="/register">*/}
        {/*    {currentUser ? <Homepage /> : <Register />}*/}
        {/*  </Route>*/}
        {/*  <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>*/}
        {/*  <Route path="/post/:id">*/}
        {/*    <Single />*/}
        {/*  </Route>*/}
        {/*  <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>*/}
        {/*  <Route path="/settings">*/}
        {/*    {currentUser ? <Settings /> : <Login />}*/}
        {/*  </Route>*/}
        {/*</Switch> }*/}
      </Router>
    </ApolloProvider>
  );
}

export default App;

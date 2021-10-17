import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/HomePage/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Single from "./Components/Pages/Single/Single";
import Settings from "./Components/Pages/UserSettings/Settings";
import Write from "./Components/Pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>

        {user ? (
          <Route path="/write" exact>
            <Write />
          </Route>
        ) : (
          <Route path="/write" exact>
            <Register />
          </Route>
        )}

        <Route path="/profile" exact>
          <Settings />
        </Route>

        <Route path="/single" exact>
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

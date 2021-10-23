import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/HomePage/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Single from "./Components/Pages/Single/Single";
import Settings from "./Components/Pages/UserSettings/Settings";
import Write from "./Components/Pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import { useContext } from "react";
import { context } from "./redux/Context";

function App() {
  const { user } = useContext(context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

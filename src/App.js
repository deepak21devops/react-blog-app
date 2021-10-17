import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/HomePage/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Single from './Components/Pages/Single/Single';
import Settings from './Components/Pages/UserSettings/Settings';
import Write from './Components/Pages/Write/Write';

function App() {
  return (
    <>
    <NavBar/>
    <Register/>
    </>
  );
}

export default App;

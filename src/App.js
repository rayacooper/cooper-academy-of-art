import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      {appRoutes}
      </div>
    </Router>
  );
}

export default App;


const appRoutes = (
  <Routes>
    <Route />
    <Route element = {<Home />} path="/" />
  </Routes>
)
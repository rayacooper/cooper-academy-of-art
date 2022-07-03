import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Lesson from "./Components/Lesson/Lesson";
import About from "./Components/About/About";


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
    <Route element={<Lesson />} path="/lesson"/>
    <Route element={<About />} path="/about"/>
    <Route element = {<Home />} path="/" />
  </Routes>
)
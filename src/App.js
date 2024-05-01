import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigatior from './Navigatior';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
function App() {
  return (
   
    <Router>
      <Navigatior />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;

import "./App.css";
// import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Background from "./Components/Background";
import Hamburger from "./Components/Hamburger";


// import AboutSection from './Page/AboutSection';

function App() {
  // const location = useLocation();
  return (
    <div className="parent ">
      <Background>
        <Home />
      </Background>  
      <div className="hamb_div">
        <Hamburger />
      </div> 
    </div> 
  
  );
}

export default App;

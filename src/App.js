import "./App.css";
// import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Background from "./Components/Background";
import Hamburger from "./Components/Hamburger";
import Taptoscroll from "./Components/Taptoscroll";
import Scrolltotop from "./Components/Scrolltotop";
import { useEffect } from "react";
import uparraow from './Image/uparrow.svg';



// import AboutSection from './Page/AboutSection';

function App() {
  const handleClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])
  return (
    <div className="parent ">
      <Background>
        <Home />
      </Background>  
      <div className="hamb_div">
        <Hamburger />
      </div> 
      {/* <Taptoscroll /> */}
      {/* <Scrolltotop /> */}
      <div onClick={handleClick} className='uparrow'>
        <a href='#home'><img src={uparraow} /></a>
    </div>

    </div> 
    
  
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Background from "./Components/Background";

// import AboutSection from './Page/AboutSection';

function App() {
  // const location = useLocation();
  return (
    <Background>
      <Home />
      </Background>
  );
}

export default App;

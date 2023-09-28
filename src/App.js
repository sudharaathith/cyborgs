
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Event from './Page/Event';
import Background from './Components/Background';

import AboutSection from './Page/AboutSection';

function App() {
  return (
    
    <BrowserRouter>
    <Background>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/event" element={<Event/>} />
        <Route path='/about' element={<AboutSection/>}/>
        
        </Routes>
        </Background>
    </BrowserRouter>
    
  );
}

export default App;

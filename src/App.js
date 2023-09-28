import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Background from './Components/Background';

function App() {
  return (
    
    <BrowserRouter>
    <Background>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        {/*<Route path="/event" element={<Event/>} />*/}
        </Routes>
        </Background>
    </BrowserRouter>
    
  );
}

export default App;

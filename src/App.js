import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Event from './Page/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/event" element={<Event/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

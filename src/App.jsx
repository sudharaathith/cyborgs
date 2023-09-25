import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Page/Home'
import Events from './Page/Events'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/event" element={<Events/>} /> 
      </Routes>
  )
}

export default App

import "./App.css";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Event from "./Page/Event";
import Background from "./Components/Background";
import { AnimatePresence } from "framer-motion";
import About from "./Page/About";

function App() {
  // const location = useLocation();
  return (
    <BrowserRouter >
      <Background>
        <AnimatePresence>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </AnimatePresence>
      </Background>
    </BrowserRouter>
  );
}

export default App;

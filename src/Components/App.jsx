import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx"
import NoteState from "../context/notes/NoteState.js";

function App() {
  return (
    <div >
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div >
  );
}

export default App;

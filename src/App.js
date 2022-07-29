import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      Home Page

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    </div>
  );
}

export default App;

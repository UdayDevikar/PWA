import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      Home Page
      <hr />
      <div>
        <button>
          {" "}
          <Link to={"/about"}>About</Link>
        </button>
        <button>
          <Link to={"/contact"}>Contact</Link>
        </button>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

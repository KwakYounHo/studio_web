import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/Main";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/navBar/NavBar";
import About from "./screens/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;

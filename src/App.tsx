import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login"  element={<Login />} />
        <Route path="/footer"  element={<Footer />} />
        <Route path="/nav"  element={<Navbar/>} />
        <Route path="/login"  element={<Login />} />
        <Route path="/"  element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

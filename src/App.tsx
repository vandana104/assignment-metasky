import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./Components/Login/login";
import { useDispatch } from "react-redux";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";
import { loginSuccess } from "./utils/auth";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");
    setCheckLogin(isLoggedIn && storedUsername !== null);
    if (isLoggedIn && storedUsername) {
      dispatch(loginSuccess(storedUsername));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);
  return (
    <div className="App">
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        {!checkLogin && <Route path="/login" element={<Login />} />}

        <Route path="/" element={<Home />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
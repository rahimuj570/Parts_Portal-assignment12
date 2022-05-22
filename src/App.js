import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home";
import Login from "./Components/User_Management/Login";
import ResetPass from "./Components/User_Management/ResetPass";
import Signup from "./Components/User_Management/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/reset_pass" element={<ResetPass />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

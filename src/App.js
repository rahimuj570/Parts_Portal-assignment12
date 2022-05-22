import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;

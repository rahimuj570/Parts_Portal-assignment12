import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Components/Blogs";
import AddReview from "./Components/Dashboard/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
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

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="my_profile" element={<MyProfile />} />
          <Route path="my_orders" element={<MyOrders />} />
          <Route path="add_reviews" element={<AddReview />} />
        </Route>

        <Route path="blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Components/Blogs";
import AddReview from "./Components/Dashboard/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import MakeAdmin from "./Components/Dashboard/MakeAdmin";
import ManageAllOrders from "./Components/Dashboard/ManageAllOrders";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home";
import EditProducts from "./Components/Products/EditProducts";
import ManageProducts from "./Components/Products/ManageProducts";
import Purchase from "./Components/Products/Purchase";
import Login from "./Components/User_Management/Login";
import RequireAuth from "./Components/User_Management/RequireAuth";
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

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="my_profile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
          <Route
            path="my_orders"
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path="add_reviews"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          />
          <Route
            path="manage_orders"
            element={
              <RequireAuth>
                <ManageAllOrders />
              </RequireAuth>
            }
          />
          <Route
            path="manage_users"
            element={
              <RequireAuth>
                <MakeAdmin />
              </RequireAuth>
            }
          />
          <Route
            path="manage_products"
            element={
              <RequireAuth>
                <ManageProducts />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/edit_product/:id"
          element={
            <RequireAuth>
              <EditProducts />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

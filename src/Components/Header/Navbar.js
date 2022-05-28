import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="navbar bg-sky-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            </li>

            <li>
              <button onClick={() => navigate("/blogs")}>Blogs</button>
            </li>
            <li>
              <button onClick={() => navigate("/portfolio")}>Portfolio</button>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost font-extrabold normal-case text-xl"
        >
          Parts Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          </li>

          <li>
            <button onClick={() => navigate("/blogs")}>Blogs</button>
          </li>
          <li>
            <button onClick={() => navigate("/portfolio")}>Portfolio</button>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <button onClick={() => signOut(auth)} className="btn">
            Log out
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <button onClick={() => navigate("/login")} className="btn">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

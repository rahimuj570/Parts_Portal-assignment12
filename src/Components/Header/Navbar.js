import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div class="navbar bg-sky-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <Link to={"/"} class="btn btn-ghost font-extrabold normal-case text-xl">
          Parts Portal
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
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
        <div class="navbar-end">
          <button onClick={() => signOut(auth)} class="btn">
            Log out
          </button>
        </div>
      ) : (
        <div class="navbar-end">
          <button onClick={() => navigate("/login")} class="btn">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

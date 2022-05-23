import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <div class="relative drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            for="my-drawer-2"
            class="absolute right-0 top-2 btn btn-primary drawer-button lg:hidden"
          >
            Show Options
          </label>
        </div>
        <div class=" drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-sky-100 text-base-content">
            {userData.role === "user" ? (
              <>
                <li>
                  <button onClick={() => navigate("/dashboard/my_orders")}>
                    My Orders
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/add_reviews")}>
                    Add Reviews
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => navigate("/dashboard/manage_products")}
                  >
                    Manage Products
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/manage_orders")}>
                    Manage Orders
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/manage_users")}>
                    Manage Users
                  </button>
                </li>
              </>
            )}

            <li>
              <button onClick={() => navigate("/dashboard/my_profile")}>
                My Profile
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

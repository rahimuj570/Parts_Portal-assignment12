import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://boiling-garden-56159.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <UseTitle title={"Dashboard"} />
      <div className="relative drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="absolute right-0 top-2 btn btn-primary drawer-button lg:hidden"
          >
            Show Options
          </label>
        </div>
        <div className=" drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-sky-100 text-base-content">
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
              <button onClick={() => navigate("/dashboard")}>My Profile</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
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
            {/* {user ? (
              <>
                {" "}
                <li>
                  <button onClick={() => navigate("/add_reviews")}>
                    Add Reviews
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/my_profile")}>
                    My Profile
                  </button>
                </li>
              </>
            ) : (
              <> */}
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
            <li>
              <button onClick={() => navigate("/dashboard/my_profile")}>
                My Profile
              </button>
            </li>
            {/* </>
            )} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

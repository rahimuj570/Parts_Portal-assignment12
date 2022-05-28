import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import useRoleUser from "../../Hooks/useRoleUser";
import UseTitle from "../../Hooks/UseTitle";
import AccessDenied from "../User_Management/AccessDenied";

const ManageAllOrders = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [allOrders, setAllOrders] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch(`https://boiling-garden-56159.herokuapp.com/myPd`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [refetch]);
  console.log(allOrders);

  // ======== Check Role =========
  if (useRoleUser() === "user") {
    return <AccessDenied />;
  }
  return (
    <>
      <UseTitle title={"Manage All Orders"} />
      <div className="text-center mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        My Orders
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((pd) => (
              <tr key={pd._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img alt="" src={pd.picture} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pd.pdName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Total ${pd.totalPrice}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    per items ${pd.price}
                  </span>
                </td>
                <td>{pd.quantity} Items</td>
                <th>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Are You Sure to Cancel This Order?")
                      ) {
                        fetch(
                          `https://boiling-garden-56159.herokuapp.com/myPd/${pd._id}`,
                          {
                            method: "delete",
                          }
                        )
                          .then((res) => res.json())
                          .then((result) => {
                            setRefetch(!refetch);
                            console.log(result);
                          });
                      }
                    }}
                    className="btn bg-red-400 text-white hover:bg-red-300 btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
                {pd.payStatus === "unpaid" && (
                  <th>
                    <button
                      disabled
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Unpaid
                    </button>
                  </th>
                )}
                {pd.payStatus === "paid" && (
                  <th>
                    <button
                      disabled
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Delivered
                    </button>
                  </th>
                )}
                {pd.payStatus === "pending" && (
                  <th>
                    <button
                      disabled
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Accept Order
                    </button>
                  </th>
                )}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ManageAllOrders;

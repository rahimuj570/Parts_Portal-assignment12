import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import AccessDenied from "../User_Management/AccessDenied";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myPd, setMyPd] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [denied, setDenied] = useState(false);
  useEffect(() => {
    fetch(`https://boiling-garden-56159.herokuapp.com/myPd/${user.email}`, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          setDenied(true);
        } else {
          setMyPd(data);
        }
      });
  }, [refetch]);

  // ======= UnAuthorized=======
  if (denied) {
    setTimeout(() => navigate("/login"), 3000);
    return <AccessDenied />;
  }

  return (
    <>
      <UseTitle title={"Manage My Orders"} />
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
            {myPd.map((pd) => (
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
                      onClick={() => navigate(`/pay/${pd._id}`)}
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Pay
                    </button>
                  </th>
                )}
                {pd.payStatus === "paid" && (
                  <th>
                    <button
                      disabled
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Paid
                    </button>
                  </th>
                )}
                {pd.payStatus === "pending" && (
                  <th>
                    <button
                      disabled
                      className="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm"
                    >
                      Pending
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

export default MyOrders;

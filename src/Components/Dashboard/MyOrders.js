import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myPd, setMyPd] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myPd/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPd(data));
  }, []);
  return (
    <>
      <div className="text-center mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        My Orders
      </div>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img alt="" src={pd.picture} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{pd.pdName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Total ${parseFloat(pd.price) * parseFloat(pd.quantity)}
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    per items ${pd.price}
                  </span>
                </td>
                <td>{pd.quantity} Items</td>
                <th>
                  <button class="btn bg-red-400 text-white hover:bg-red-300 btn-ghost btn-xs">
                    Delete
                  </button>
                </th>
                <th>
                  <button class="btn bg-yellow-400 hover:bg-yellow-300 text-white btn-ghost btn-sm">
                    Pay
                  </button>
                </th>
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../Loading";
import UseTitle from "../../Hooks/UseTitle";
import useRoleUser from "../../Hooks/useRoleUser";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import AccessDenied from "../User_Management/AccessDenied";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://boiling-garden-56159.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ======== Delete Action =======
  const deleteAction = (id) => {
    const confirm = prompt(
      `Are you sure to delete (${
        products.find((product) => product._id === id).name
      })? Then type "DELETE" to confirm your action.`
    ).toLocaleUpperCase();
    if (confirm === "DELETE") {
      fetch(`https://boiling-garden-56159.herokuapp.com/delete_product/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          const remainingPD = products.filter((product) => product._id !== id);
          setProducts(remainingPD);
        })
      );
    } else {
      toast.error(`Type "DELETE" in Uppercase to Delete This Product`);
      return;
    }
  };
  if (useRoleUser() === "user") {
    return <AccessDenied />;
  }

  if (products.length === 0) {
    return <Loading />;
  }
  console.log(products);
  return (
    <>
      <UseTitle title={"Manage Products"} />
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Manage Products
      </div>
      <div className="mb-5 text-center">
        <button
          onClick={() => navigate("/add_product")}
          className="p-1 font-semibold hover:bg-indigo-400 hover:text-white duration-300 hover:border-slate-200 bg-white border-indigo-400 border-4 text-indigo-400"
        >
          Add New Products
        </button>
      </div>

      <div className="pb-20 relative overflow-x-auto shadow-md sm:rounded-lg">
        {products.length === 0 && <Loading />}
        <table className="w-5/6 mx-auto smax:w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                About
              </th>
              <th scope="col" className="px-6 py-3">
                Price (TK)
              </th>
              <th scope="col" className="px-6 py-3">
                Available Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Minimum Order Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map(
              (pd) =>
                pd.name && (
                  <tr
                    key={pd?._id}
                    className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                  >
                    <td className="px-6 py-4">
                      <img className="w-10" src={pd?.picture} alt={pd?.name} />
                    </td>
                    {pd?.name.length > 40 ? (
                      <th
                        title={pd?.name}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {pd?.name.length > 40
                          ? pd?.name.slice(0, 40) + " ..."
                          : pd?.name}
                      </th>
                    ) : (
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {pd?.name}
                      </th>
                    )}
                    <td className="px-6 py-4">
                      <div className="tooltip" data-tip={pd?.about}>
                        {pd?.about.length > 50
                          ? pd?.about.slice(0, 30) + "..."
                          : pd?.about}
                      </div>
                    </td>
                    <td className="px-6 py-4">{pd?.price}</td>
                    <td className="px-6 py-4">{pd?.quantity}</td>
                    <td className="px-6 py-4">{pd?.minQuantity}</td>
                    <td className="px-6 py-4 text-right">
                      <div onClick={() => navigate(`/edit_product/${pd?._id}`)}>
                        <div className="tooltip" data-tip="Edit">
                          <FaEdit className="text-sky-600 cursor-pointer hover:text-sky-500 text-2xl" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div onClick={() => deleteAction(pd?._id)}>
                        <div className="tooltip" data-tip="Delete">
                          <FaRegTrashAlt className="text-red-600 cursor-pointer hover:text-red-500 text-2xl" />
                        </div>
                      </div>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;

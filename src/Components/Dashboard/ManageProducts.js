import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../Loading";
import UseTitle from "../../Hooks/UseTitle";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
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
      fetch(`https://tranquil-hamlet-69916.herokuapp.com/delete/${id}`, {
        method: "DELETE",
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
  return (
    <>
      <UseTitle title={"Manage Products"} />
      <div className="pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          MANAGE PRODUCTS
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>
      <div className="mb-5 text-center">
        <button
          onClick={() => navigate("/add")}
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
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map(
              ({ _id, name, price, minQuantity, picture, quantity, about }) => (
                <tr
                  key={_id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <td className="px-6 py-4">
                    <img className="w-10" src={picture} alt={name} />
                  </td>
                  {name.length > 40 ? (
                    <th
                      title={name}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {name.length > 40 ? name.slice(0, 40) + " ..." : name}
                    </th>
                  ) : (
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {name}
                    </th>
                  )}
                  <td className="px-6 py-4">
                    <div class="tooltip" data-tip={about}>
                      {about.length > 50 ? about.slice(0, 30) + "..." : about}
                    </div>
                  </td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4">{quantity}</td>
                  <td className="px-6 py-4">{minQuantity}</td>
                  <td className="px-6 py-4 text-right">
                    <div onClick={() => deleteAction(_id)}>
                      <FaRegTrashAlt className="text-red-600 cursor-pointer hover:text-red-500 text-2xl" />
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

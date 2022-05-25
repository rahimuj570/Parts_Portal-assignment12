import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import { BsArrowRightCircleFill } from "react-icons/bs";

const EditProducts = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [prevPdData, setPrevPdData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setPrevPdData(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    data.uid = user.uid;
    const url = `/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    reset();
    toast.success("Product Updated");
  };

  return (
    <>
      <UseTitle title={"Add Product"} />
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Edit Products
      </div>

      <div class="p-5 flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow card shadow-lg rounded-box place-items-center">
          <form
            className="mt-5 w-5/6 mx-auto flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 flex flex-col">
              <label htmlFor="name">Product Name</label>
              <input
                type={"text"}
                placeholder="Your Product Name"
                id="name"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="image">Product Image</label>
              <input
                type={"text"}
                placeholder="Your Product Image"
                id="image"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("picture", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="quantity">Quantity</label>
              <input
                type={"number"}
                placeholder="Your Product Quantity"
                id="quantity"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("quantity", {
                  required: true,
                  pattern: /^[1-9]/,
                })}
              />
              {errors.quantity?.type === "required" && (
                <p className="text-sm text-red-400">
                  * Please Input The Quantity
                </p>
              )}
              {errors.quantity?.type === "pattern" && (
                <p className="text-sm text-red-400">
                  * Please Input a Valid Data
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="minQuantity">Minimum Order Quantity</label>
              <input
                type={"number"}
                placeholder="Your Product Quantity"
                id="minQuantity"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("minQuantity", {
                  required: true,
                  pattern: /^[1-9]/,
                })}
              />
              {errors.quantity?.type === "required" && (
                <p className="text-sm text-red-400">
                  * Please Input The Quantity
                </p>
              )}
              {errors.quantity?.type === "pattern" && (
                <p className="text-sm text-red-400">
                  * Please Input a Valid Data
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="price">Product Price</label>
              <input
                type={"text"}
                placeholder="Per Product Price"
                id="price"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("price", {
                  required: true,
                  pattern: /^[1-9]|^,/,
                })}
              />
              {errors.price?.type === "required" && (
                <p className="text-sm text-red-400">* Please Input The Price</p>
              )}
              {errors.price?.type === "pattern" && (
                <p className="text-sm text-red-400">
                  * Please Input a Valid Data
                </p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="description">Short Description</label>
              <textarea
                type={"text"}
                placeholder="Your Product Description"
                id="description"
                className="text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("about", {
                  required: true,
                })}
              />
            </div>

            <input
              className="mb-20 shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
              type="submit"
              value={"Preview Product"}
            />
          </form>
        </div>
        <div class="divider lg:divider-horizontal ">
          <BsArrowRightCircleFill className="text-sky-500 h-16 w-16" />
        </div>
        <div class="grid flex-grow card shadow-lg rounded-box place-items-center">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title mb-2 text-2xl">{prevPdData.name}</h2>
              <div className="mb-1 flex">
                <span className="font-bold mr-2">Price:</span>
                <p>{prevPdData.price} TK</p>
              </div>
              <div className="mb-1 flex">
                <span className="font-bold mr-2">Minimum Order Quantity:</span>
                <p>{prevPdData.minQuantity} Items</p>
              </div>
              <div className="mb-1 flex">
                <span className="font-bold mr-2">Available Quantity:</span>
                <p>{prevPdData.quantity} Items</p>
              </div>
              <div className="mb-1 flex">
                <span className="font-bold mr-2">About:</span>
                <p>{prevPdData.about}</p>
              </div>
            </div>
            <figure>
              <img src={prevPdData.picture} alt={`img of ${prevPdData.name}`} />
            </figure>
            <input
              className="mt-10 mb-20 shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
              type="submit"
              value={"Update Product"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProducts;

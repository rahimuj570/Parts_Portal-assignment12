import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import useRoleUser from "../../Hooks/useRoleUser";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../Loading";
import AccessDenied from "../User_Management/AccessDenied";

const AddProduct = () => {
  const [pd, setPd] = useState({});
  const [load, setLoad] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoad(true);
    const picture = data.picture[0];
    const formData = new FormData();
    formData.append("image", picture);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgStoreBB}`;
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const picture = result.data.url;
          const pictureType = result.data.image.extension.toLowerCase();

          if (
            pictureType == "jpg" ||
            pictureType == "jpeg" ||
            pictureType == "gif" ||
            pictureType == "png"
          ) {
            const insertedData = {
              price: data.price,
              picture,
              quantity: data.quantity,
              minQuantity: data.minQuantity,
              name: data.name,
              about: data.about,
            };

            // ======= Product Add =====
            const url = `https://tranquil-hamlet-69916.herokuapp.com/add`;
            fetch("https://boiling-garden-56159.herokuapp.com/add_products", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(insertedData),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                reset();
                toast.success("Product Added");
              });
          } else {
            toast.error(
              "Only JPG, JPEG, GIF and PNG extension of Image is allow"
            );
          }
        } else {
          toast.error("Please upload a valid image file...");
        }
        setLoad(false);
      });
  };

  // ======== Check Role =========
  if (useRoleUser() === "user") {
    return <AccessDenied />;
  }

  // ======== LOADINg =========
  if (load) {
    return <Loading />;
  }

  return (
    <>
      <UseTitle title={"Add Product"} />

      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Add Product
      </div>

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
            type={"file"}
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
            <p className="text-sm text-red-400">* Please Input The Quantity</p>
          )}
          {errors.quantity?.type === "pattern" && (
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
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
            <p className="text-sm text-red-400">* Please Input The Quantity</p>
          )}
          {errors.quantity?.type === "pattern" && (
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
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
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
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
    </>
  );
};

export default AddProduct;

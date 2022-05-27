import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";

const EditProducts = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [prevPdData, setPrevPdData] = useState({});
  const [newPdData, setNewPdData] = useState({});
  const [load, setLoad] = useState(false);

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
            const editedData = {
              price: data.price,
              picture,
              quantity: data.quantity,
              minQuantity: data.minQuantity,
              name: data.name,
              about: data.about,
            };
            setNewPdData(editedData);
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

  const updateHandler = () => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(newPdData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Product Updated");
      });
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

        {/* ============ Card ========= */}
        <div class="grid flex-grow card shadow-lg rounded-box place-items-center">
          <div class="card w-96 bg-base-100 shadow-xl">
            {load ? (
              <div className="card-body h-full w-full flex justify-center items-center bg-slate-100">
                <SiConvertio className="block animate-spin w-20 h-20" />
              </div>
            ) : (
              <>
                {newPdData.name ? (
                  <>
                    {" "}
                    <div class="card-body">
                      <h2 class="card-title mb-2 text-2xl">{newPdData.name}</h2>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">Price:</span>
                        <p>{newPdData.price} TK</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">
                          Minimum Order Quantity:
                        </span>
                        <p>{newPdData.minQuantity} Items</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">
                          Available Quantity:
                        </span>
                        <p>{newPdData.quantity} Items</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">About:</span>
                        <p>{newPdData.about}</p>
                      </div>
                    </div>
                    <figure>
                      <img
                        src={newPdData.picture}
                        alt={`img of ${newPdData.name}`}
                      />
                    </figure>
                    <input
                      onClick={updateHandler}
                      className="mt-10 mb-20 shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
                      type="submit"
                      value={"Update Product"}
                    />
                  </>
                ) : (
                  <>
                    <div class="card-body">
                      <h2 class="card-title mb-2 text-2xl">
                        {prevPdData.name}
                      </h2>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">Price:</span>
                        <p>{prevPdData.price} TK</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">
                          Minimum Order Quantity:
                        </span>
                        <p>{prevPdData.minQuantity} Items</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">
                          Available Quantity:
                        </span>
                        <p>{prevPdData.quantity} Items</p>
                      </div>
                      <div className="mb-1 flex">
                        <span className="font-bold mr-2">About:</span>
                        <p>{prevPdData.about}</p>
                      </div>
                    </div>
                    <figure>
                      <img
                        src={prevPdData.picture}
                        alt={`img of ${prevPdData.name}`}
                      />
                    </figure>
                    <input
                      onClick={updateHandler}
                      className="mt-10 mb-20 shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
                      type="submit"
                      value={"Update Product"}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProducts;

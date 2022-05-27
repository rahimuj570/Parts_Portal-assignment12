import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const getInputQuantity = useRef();
  const getInputEmail = useRef();
  const getInputPhone = useRef();
  const getInputAddress = useRef();
  const { id } = useParams();
  const [singlePD, setSinglePD] = useState([]);
  const { _id, name, quantity, price, picture, minQuantity, about } = singlePD;
  const [reFetch, setReFetch] = useState(false);

  // ======== Get Selected Product =======
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url).then((res) => res.json().then((data) => setSinglePD(data)));
  }, [reFetch]);
  console.log(singlePD);

  // ========= Update Quantity =========
  const quantityUpdateAction = (latestData, userPD) => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(latestData),
    }).then((res) =>
      res.json().then((data) => {
        fetch("http://localhost:5000/add_my_products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userPD),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        setReFetch(!reFetch);
      })
    );
  };

  const quantityAction = async (data) => {
    const inputQuantity = parseInt(getInputQuantity.current.value);
    const phone = getInputPhone.current.value;
    const address = getInputAddress.current.value;
    const existQuantity = parseInt(quantity);
    const minOrders = parseInt(minQuantity);
    if (inputQuantity > 0) {
      if (existQuantity >= inputQuantity) {
        if (inputQuantity >= minOrders) {
          const newQuantity = existQuantity - inputQuantity;

          const prevData = { ...singlePD };
          prevData.quantity = newQuantity;
          const userProduct = {
            quantity: inputQuantity,
            email: user.email,
            userName: user.displayName,
            pdName: name,
            price,
            picture,
            pdId: _id,
            address,
            phone,
            totalPrice: parseFloat(price) * inputQuantity,
            payStatus: "unpaid",
          };
          quantityUpdateAction(prevData, userProduct);
          toast.success("Order Successfully!");
        } else {
          toast.error(`You Have to order at least ${minQuantity} Products!`);
        }
      } else {
        toast.error("We Haven't Enough Product at this time!");
        return;
      }
    } else {
      toast.error("Please Input a Valid Number");
      return;
    }
  };

  return (
    <>
      <UseTitle title={"Buy Product"} />
      <div className="py-16">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
                {name}
              </h1>
              <ul className="mb-5 text-xl">
                <li>
                  <span className="font-bold font-signika">Price:</span>{" "}
                  <span>{price}TK</span>
                </li>
                <li>
                  <span className="font-bold font-signika">Quantity: </span>
                  <span>{`${parseInt(quantity)} ${
                    parseInt(quantity) < 2 ? "Item" : "Items"
                  }`}</span>
                </li>
                <li>
                  <span className="font-bold font-signika">
                    Min Order Quantity:{" "}
                  </span>
                  <span>{minQuantity} Items</span>
                </li>
                <li>
                  <span className="font-bold font-signika">Stock: </span>
                  <span>
                    {`${parseInt(quantity) < 1 ? "Stock Out" : "Available"}`}
                  </span>
                </li>
              </ul>
              <p className="text-xl">{about}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
                }}
                className="shadow-lg rounded-3xl px-1 items-center flex flex-col py-5 mt-2"
              >
                <div class="mb-2 form-control">
                  <label class="input-group input-group-md">
                    <span>Address</span>
                    <input
                      required
                      ref={getInputAddress}
                      name="address"
                      type="text"
                      placeholder="Your Address"
                      class="input input-bordered input-md"
                    />
                  </label>
                </div>

                <div class="mb-2 form-control">
                  <label class="input-group input-group-md">
                    <span>Phone</span>
                    <input
                      required
                      ref={getInputPhone}
                      name="phone"
                      type="number"
                      placeholder="Your Phone"
                      class="input input-bordered input-md"
                    />
                  </label>
                </div>

                <div class="mb-2 form-control">
                  <label class="input-group input-group-md">
                    <span>Email</span>
                    <input
                      required
                      ref={getInputEmail}
                      readOnly
                      value={user.email}
                      name="phone"
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-md"
                    />
                  </label>
                </div>

                <input
                  required
                  name="quantity"
                  ref={getInputQuantity}
                  title="Input Product Quantity to Deliver/Add-Stock"
                  className="w-full  border-2  rounded-md  p-1 border-sky-500"
                  type="number"
                  placeholder="Input Product Quantity to Deliver/Add-Stock"
                />
                <div className="mt-2">
                  <button
                    onClick={quantityAction}
                    className="smax:text-sm xsmax:px-2 text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 hover:bg-transparent  hover:text duration-300 hover:text-purple-600 inline-block border border-purple-600 mr-3"
                  >
                    Order Now
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-5/12 order-2">
              <img src={picture} alt="" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;

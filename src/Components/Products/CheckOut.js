import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Loading from "../Loading";
import { toast } from "react-toastify";

const CheckOut = () => {
  const [singlePD, setSinglePD] = useState({});
  const { id } = useParams();

  // ======== Get Selected Product =======
  useEffect(() => {
    const url = `http://localhost:5000/my_product/${id}`;
    fetch(url, {
      headers: { body: id },
    }).then((res) => res.json().then((data) => setSinglePD(data)));
  }, []);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  // ======= STRIPE INTENT ACTION ======

  useEffect(() => {
    if (Object.keys(singlePD).length !== 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(singlePD),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [singlePD]);

  // // ========== Loading =========
  // if (!singlePD.pdName) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Checkout
      </div>

      <div className=" flex justify-center items-center">
        <div className="p-2 m-5 shadow-lg">
          <div class="card-body ">
            <h2 class="card-title mb-2 text-2xl">{singlePD.pdName}</h2>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Per Item Price:</span>
              <p>{singlePD.price} TK</p>
            </div>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Total Price:</span>
              <p>{singlePD.totalPrice} TK</p>
            </div>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Order Quantity:</span>
              <p>{singlePD.quantity} Items</p>
            </div>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Phone:</span>
              <p>{singlePD.phone} Items</p>
            </div>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Email:</span>
              <p>{singlePD.email} Items</p>
            </div>
            <div className="mb-1 flex">
              <span className="font-bold mr-2">Address:</span>
              <p>{singlePD.address} Items</p>
            </div>
          </div>
          <figure className="max-w-sm">
            <img
              className="w-full"
              src={singlePD.picture}
              alt={`img of ${singlePD.name}`}
            />
          </figure>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!stripe || !elements) {
                return;
              }

              const card = elements.getElement(CardElement);

              if (card == null) {
                return;
              }

              const { error, paymentMethod } = await stripe.createPaymentMethod(
                {
                  type: "card",
                  card,
                }
              );

              if (error) {
                console.log("[error]", error);
                toast.error(error.message);
              } else {
                toast.success("Payment Successful");
                console.log("[PaymentMethod]", paymentMethod);
              }
              // ======== CONFIRM PAYMENT =======
              console.log(singlePD);
              const { paymentIntent, error: paymentError } =
                await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                    card: card,
                    billing_details: {
                      email: singlePD.email,
                      name: singlePD.userName,
                      phone: singlePD.phone,
                    },
                  },
                });
              if (paymentError) {
                toast.error(paymentError.message);
              } else {
                console.log(paymentIntent);
                toast.success("Successfully Paid");
              }
            }}
            className="mt-10 p-2 bg-slate-100"
          >
            <CardElement className="mt-10 bg-white py-4 px-2" />
            <div className="text-center">
              <input
                className=" mt-5 mb-10 shadow mx-auto w-5/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
                type="submit"
                disabled={!stripe || !elements || !clientSecret}
                value=" Pay"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

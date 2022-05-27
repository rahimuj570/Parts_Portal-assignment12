import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Pay = () => {
  const stripePromise = loadStripe(
    "pk_test_51L3GsNGFG5aGUVtDgTsok53FmUUT7PDHdkUmwmEpTHliyzH7ndBUJer7552VHDCXE5krM9VVQF2KKXnsFTRze1AG00GBZuhrJ3"
  );
  return (
    <Elements stripe={stripePromise}>
      <CheckOut />
    </Elements>
  );
};

export default Pay;

import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, about, minQuantity, quantity, picture } = product;
  return (
    <>
      <div className="card max-w-96 mx-auto bg-slate-100 shadow-xl">
        <figure className="w-80 mx-auto h-60">
          <img className="h-full w-full" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>
            <span className="font-bold text-base">Price:</span> {price}
          </p>
          <p>
            <span className="font-bold text-base">Minimum Order Quantity:</span>{" "}
            {minQuantity}
          </p>
          <p>
            <span className="font-bold text-base">Available:</span> {quantity}
          </p>
          <p>
            <span className="font-bold text-base">Short Info:</span> {about}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/purchase/${_id}`)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

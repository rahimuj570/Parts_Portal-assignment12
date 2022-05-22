import React from "react";

const Product = ({ product }) => {
  const { name, price, about, minQuantity, quantity, img } = product;
  return (
    <>
      <div class="card max-w-96 mx-auto bg-slate-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/car?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl">{name}</h2>
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
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

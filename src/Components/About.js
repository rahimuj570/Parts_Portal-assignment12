import React from "react";

const About = () => {
  return (
    <>
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        About Our Services
      </div>
      <div className="w-5/6 mx-auto card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/car?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hey There!</h2>
          <p>
            Actually this is not an eCommerce website. This is our official
            website. We are produce cars parts and sell to the giants company.
            But if you are a dealer then you can contact us. We can provide you
            car's body part. We provide genuine products. And we made this
            products by our expert Engineers.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

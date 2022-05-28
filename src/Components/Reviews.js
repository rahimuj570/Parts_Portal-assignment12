import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [revData, setRevData] = useState([]);

  useEffect(() => {
    fetch("https://boiling-garden-56159.herokuapp.com/add_rev")
      .then((res) => res.json())
      .then((data) => setRevData(data));
  }, []);
  console.log(revData);
  return (
    <>
      <div className="bg-base-200">
        <div className="text-center mt-20 pt-10 pb-5 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
          Recent Reviews
        </div>
      </div>
      <div className="h-96 carousel carousel-vertical ">
        {revData?.map((rev) => (
          <div key={rev._id} className="carousel-item h-full">
            <div className="hero  bg-base-200">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                      <span className="text-xl">
                        {rev.name.split(" ")[0].slice(0, 1) +
                          rev.name.split(" ")[1].slice(0, 1)}
                      </span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold">{rev.name}</h1>
                  <p className="py-6">{rev.rev}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;

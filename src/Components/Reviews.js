import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [revData, setRevData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/add_rev")
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
      <div class="h-96 carousel carousel-vertical ">
        {revData?.map((rev) => (
          <div key={rev._id} class="carousel-item h-full">
            <div class="hero  bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <div class="avatar online placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                      <span class="text-xl">
                        {rev.name.split(" ")[0].slice(0, 1) +
                          rev.name.split(" ")[1].slice(0, 1)}
                      </span>
                    </div>
                  </div>
                  <h1 class="text-2xl font-bold">{rev.name}</h1>
                  <p class="py-6">{rev.rev}</p>
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

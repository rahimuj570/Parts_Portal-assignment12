import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="bg-base-200">
        <div className="text-center mt-20 pt-10 pb-5 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
          About Our Services
        </div>
      </div>
      <div class="h-96 carousel carousel-vertical ">
        <div class="carousel-item h-full">
          <div class="hero  bg-base-200">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <div class="avatar online placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">JO</span>
                  </div>
                </div>
                <h1 class="text-2xl font-bold">John Oswald</h1>
                <p class="py-6">Really Love their Service. I will come back.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item h-full">
          <div class="hero  bg-base-200">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <div class="avatar online placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">LIO</span>
                  </div>
                </div>
                <h1 class="text-2xl font-bold">Leono Inferno Ovo</h1>
                <p class="py-6">I am very happy to become their customer.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item h-full">
          <div class="hero  bg-base-200">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <div class="avatar online placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">HB</span>
                  </div>
                </div>
                <h1 class="text-2xl font-bold">Herm Bean</h1>
                <p class="py-6">I will recommend everyone to their service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

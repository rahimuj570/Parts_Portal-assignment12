import React from "react";

// ========= Import Carousel img ====
import oil from "./img/oil.jpg";
import headlight from "./img/headlight.jpg";
import backlight from "./img/backlight.jpg";
import speedmeter from "./img/speedmeter.jpg";
import wheel from "./img/wheel.jpg";
const Carousel = () => {
  return (
    <div class="carousel md:h-screen w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${oil})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Genuine Motors Oil</h1>
              <p class="mb-5">We will provide you genuine oil.</p>
              <button class="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${backlight})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Dashing Backlight</h1>
              <p class="mb-5">
                Our Designer and Engineer Build awesome backlight.
              </p>
              <button class="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${headlight})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Awesome Headlight</h1>
              <p class="mb-5">
                We will give you 2 year replacement offer for our headlights.
              </p>
              <button class="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${wheel})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Monster Wheel</h1>
              <p class="mb-5">
                We specially known for our Wheel. We are providing you 5 year of
                guaranty.
              </p>
              <button class="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" class="carousel-item relative w-full">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${speedmeter})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Stylish Speed Meter</h1>
              <p class="mb-5">
                We build accurate speed meter and we always try to make this
                awesome.
              </p>
              <button class="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

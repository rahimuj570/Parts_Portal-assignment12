import React from "react";

// ========= Import Carousel img ====
import oil from "./img/oil.jpg";
import headlight from "./img/headlight.jpg";
import backlight from "./img/backlight.jpg";
import speedmeter from "./img/speedmeter.jpg";
import wheel from "./img/wheel.jpg";
const Carousel = () => {
  return (
    <div className="carousel md:h-screen w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${oil})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Genuine Motors Oil</h1>
              <p className="mb-5">We will provide you genuine oil.</p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${backlight})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Dashing Backlight</h1>
              <p className="mb-5">
                Our Designer and Engineer Build awesome backlight.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${headlight})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Awesome Headlight</h1>
              <p className="mb-5">
                We will give you 2 year replacement offer for our headlights.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${wheel})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Monster Wheel</h1>
              <p className="mb-5">
                We specially known for our Wheel. We are providing you 5 year of
                guaranty.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${speedmeter})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Stylish Speed Meter</h1>
              <p className="mb-5">
                We build accurate speed meter and we always try to make this
                awesome.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

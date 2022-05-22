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
        <img className=" opacity-80 w-full" alt="" src={oil} />{" "}
        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
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
        <img className=" opacity-80 w-full" src={headlight} alt="" />

        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
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
        <img className=" opacity-80 w-full" src={backlight} alt="" />{" "}
        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
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
        <img className=" opacity-80 w-full" src={speedmeter} alt="" />{" "}
        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
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
        <img className=" opacity-80 w-full" src={wheel} alt="" />{" "}
        <button className="btn shadow-lg absolute bg-primary text-white text-3xl font-extrabold px-6 rounded py-1 bottom-5 right-0">
          BUY NOW
        </button>
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

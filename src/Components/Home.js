import React from "react";
import About from "./About";
import Carousel from "./Header/Carousel/Carousel";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Products />
    </>
  );
};

export default Home;

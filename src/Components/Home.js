import React from "react";
import About from "./About";
import Carousel from "./Header/Carousel/Carousel";
import Products from "./Products/Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Products />
      <Summary />
    </>
  );
};

export default Home;

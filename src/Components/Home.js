import React from "react";
import About from "./About";
import Carousel from "./Header/Carousel/Carousel";
import Products from "./Products/Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Products />
      <Summary />
      <Reviews />
    </>
  );
};

export default Home;

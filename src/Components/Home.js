import React from "react";
import UseTitle from "../Hooks/UseTitle";
import About from "./About";
import Contact from "./Contact";
import Carousel from "./Header/Carousel/Carousel";
import Products from "./Products/Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <UseTitle title={"Parts Portal"} />
      <Carousel />
      <About />
      <Products />
      <Summary />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;

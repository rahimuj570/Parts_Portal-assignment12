import React from "react";
import { Helmet } from "react-helmet-async";

const UseTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Parts Portal</title>
    </Helmet>
  );
};

export default UseTitle;

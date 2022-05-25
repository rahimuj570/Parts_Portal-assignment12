import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./notFound.png";
import UseTitle from "../../Hooks/UseTitle";

const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <UseTitle title={"404"} />
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        404 Not Found
      </div>

      <div className=" mb-20 sm:w-2/6 w-4/6 mx-auto">
        <img className="animate-pulse" src={NotFound} alt="" />
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound404;

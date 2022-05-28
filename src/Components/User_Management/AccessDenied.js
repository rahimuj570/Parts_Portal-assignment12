import React from "react";
import { useNavigate } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";
const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <>
      <UseTitle title={"Not Allowed"} />
      <div className="w-full h-full bg-red-400 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-9xl font-extrabold">403</h1>
          <h2 className="text-white font-semibold text-5xl">
            Access forbidden
          </h2>
          <h5 className="text-slate-300">(I'm sorry buddy...)</h5>
          <button
            onClick={() => navigate(-1)}
            className="btn text-2xl font-bold mt-5"
          >
            Please Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessDenied;

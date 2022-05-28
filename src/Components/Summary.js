import React from "react";
import { BsPeopleFill, BsFillGearFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiHappyBeaming } from "react-icons/bi";

const Summary = () => {
  return (
    <>
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Summary
      </div>
      <div className="w-5/6 mx-auto ">
        <div className="stats w-full shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsPeopleFill className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Customers</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Since 2008</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <AiOutlineDollarCircle className="w-8 h-8" />
            </div>
            <div className="stat-title">Annual Revenue</div>
            <div className="stat-value">120M+</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsFillGearFill className="w-8 h-8" />
            </div>
            <div className="stat-title">Recent Parts</div>
            <div className="stat-value">82</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BiHappyBeaming className="w-8 h-8" />
            </div>
            <div className="stat-title">Customers Reviews</div>
            <div className="stat-value">25k+</div>
            <div className="stat-desc">↗︎ Satisfaction</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;

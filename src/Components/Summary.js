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
        <div class="stats w-full shadow">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <BsPeopleFill className="w-8 h-8" />
            </div>
            <div class="stat-title">Total Customers</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Since 2008</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <AiOutlineDollarCircle className="w-8 h-8" />
            </div>
            <div class="stat-title">Annual Revenue</div>
            <div class="stat-value">120M+</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <BsFillGearFill className="w-8 h-8" />
            </div>
            <div class="stat-title">Recent Parts</div>
            <div class="stat-value">82</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-secondary">
              <BiHappyBeaming className="w-8 h-8" />
            </div>
            <div class="stat-title">Customers Reviews</div>
            <div class="stat-value">25k+</div>
            <div class="stat-desc">↗︎ Satisfaction</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;

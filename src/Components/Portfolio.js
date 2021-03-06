import React from "react";
import { useNavigate } from "react-router-dom";
import UseTitle from "../Hooks/UseTitle";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <>
      <UseTitle title={"Portfolio"} />
      <div className="mx-auto card w-5/6 bg-base-100 shadow-xl">
        <figure className="max-w-xs mx-auto px-10 pt-10">
          <img
            className="rounded-xl marker:w-full ring rounded-full"
            src="https://avatars.githubusercontent.com/u/89479874"
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Md. Rahimujjaman Rahim</h2>
          <p>
            <span className="font-bold">Email Address:</span>{" "}
            rahimuj570@gmail.com
          </p>
          <p>
            <span className="font-bold">Present Address:</span> Khilkhet, Dhaka.
          </p>
          <p>
            <span className="font-bold">Education:</span> BSc in CSE (1st
            semester)
          </p>
          <p className="text-left">
            <span className="font-bold">
              Technologies which are comfortable to me:
            </span>{" "}
            <li>React JS.</li>
            <li>Javascript.</li>
            <li>React Hooks.</li>
            <li>React Components.</li>
            <li>React Firebase Hook.</li>
            <li>Firebase.</li>
            <li>Heroku.</li>
            <li>Github.</li>
            <li>Netlify.</li>
            <li>HTML.</li>
            <li>CSS.</li>
            <li>Tailwind, Bootstrap.</li>
            <li>DaisyUI.</li>
            <li>Create Basic API Using Mongo and Express.</li>
            <li>JSON Web Token, etc.</li>
          </p>
          <div className="card-actions">
            <a target={"blank"} href="https://too-mongo.web.app/">
              <button className="btn btn-primary">Link 1</button>
            </a>

            <a target={"blank"} href="https://assignment11-tech-layer.web.app/">
              <button className="btn btn-primary">Link 2</button>
            </a>

            <a
              target={"blank"}
              href="https://rahimuj570.github.io/vanilla-JS-CRUD-todo-list/"
            >
              <button className="btn btn-primary">Link 3</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

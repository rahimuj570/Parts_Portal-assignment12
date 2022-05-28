import React from "react";
import UseTitle from "../Hooks/UseTitle";

const Blogs = () => {
  return (
    <>
      <UseTitle title={"Blogs"}></UseTitle>
      <div div className="bg-zinc-50">
        <div className="text-center pt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
          Blogs
        </div>

        <div className="bg-lightblue py-10 px-4">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
            <h2 className="font-signika mdmax:mb-10 mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
              You May Want to Know...
            </h2>
            <dl className="w-full md:w-2/3">
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                  1) How will you improve the performance of a React
                  Application?
                </h3>
              </dt>
              <dd className="mb-16">
                <p>
                  By creating custom React hooks we can improve our React app
                  performance. Because creating a custom hook, we can avoid to
                  rewrite the same codes. <br />
                  Also we can use state to store data when need. <br />
                  If we prevent re-render of a component, we can boost our React
                  App.
                </p>
              </dd>
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                  2) What are the different ways to manage a state in a React
                  application?
                </h3>
              </dt>
              <dd className="mb-16">
                <p>
                  We can use useState hook to manage our state of our React
                  application.
                  <br />
                  We can also use useReducer to manage state.
                </p>
              </dd>
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                  3) Why you do not set the state directly in React. For
                  example, if you have const [products, setProducts] =
                  useState([]). Why you do not set products = [...] instead, you
                  use the setProducts?
                </h3>
              </dt>
              <dd className="mb-16">
                <p>
                  Actually useState is a built-in React hook. <br />
                  useState return two thing in an array. example: [data,
                  setData] <br />
                  'data' is a variable which is stored data but it's
                  unchangeable. <br />
                  On the other-hand, 'setData' is a function. Which can collect
                  data and stored in 'data'.
                </p>
              </dd>
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                  4) You have an array of products. Each product has a name,
                  price, description, etc. How will you implement a search to
                  find products by name?
                </h3>
              </dt>
              <dd className="mb-16">
                <p>
                  There are many ways to implement a search to find a product in
                  an array. <br />
                  We can use filter, find, includes and indexOf method. <br />
                </p>
              </dd>
              <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                  5) What is a unit test? Why should write unit tests?
                </h3>
              </dt>
              <dd className="mb-16">
                <p>
                  Unit testing is a process that allow to write test cases for
                  all functions and methods so that whenever a change causes a
                  fault, it can be quickly identified and fixed.
                  <br />
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

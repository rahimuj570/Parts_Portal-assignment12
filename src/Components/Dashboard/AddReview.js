import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";

const AddReview = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <UseTitle title={"Add Review"} />
      <div className="text-center mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Add Reviews
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const revData = { name: user.displayName, rev: e.target.rev.value };
          if (e.target.rev.value.length !== 0) {
            fetch("http://localhost:5000/add_rev", {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(revData),
            })
              .then((res) => res.json())
              .then((result) => {
                e.target.reset();
                console.log(result);
              });
          }
        }}
        className="text-center w-full"
      >
        <textarea
          required
          placeholder="Write Here..."
          className="w-5/6 mx-auto bg-slate-50 p-2"
          name="rev"
        ></textarea>{" "}
        <br />
        <button className="btn text-white mt-2 btn-primary"> Add Review</button>
      </form>
    </>
  );
};

export default AddReview;

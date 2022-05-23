import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";

const AddReview = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="text-center mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Add Reviews
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const revData = { name: user.displayName, rev: e.target.rev.value };
          console.log(revData);
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

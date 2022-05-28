import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { GiModernCity, GiSmartphone } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import { toast } from "react-toastify";
import UseTitle from "../../Hooks/UseTitle";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch(`https://boiling-garden-56159.herokuapp.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [refetch]);

  return (
    <div className="h-screen w-full">
      <div className="text-center mt-48 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        My Profile
      </div>
      <UseTitle title={"My Profile"} />

      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">
                {userData?.name?.split(" ")[0].slice(0, 1) +
                  userData?.name?.split(" ")[1].slice(0, 1)}
              </span>
            </div>
          </div>
          <h1 className="text-2xl pb-2 font-bold">{userData?.name}</h1>
          <div className="flex items-center">
            <RiAdminLine className="w-5 h-5" />
            <span className="ml-1 font-bold">Role:</span>
            <p className="ml-2 my-2">{userData?.role}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineMail className="w-5 h-5" />
            <span className="ml-1 font-bold">Email:</span>
            <p className="ml-2 my-2">{userData?.email}</p>
          </div>
          <div className="flex items-center">
            <GiModernCity className="w-5 h-5" />
            <span className="ml-1 font-bold">City:</span>
            <p className="ml-2 my-2">
              {userData?.city
                ? userData?.city
                : "*Please Update Your Profile from Bellow."}
            </p>
          </div>
          <div className="flex items-center">
            <MdOutlineSchool className="w-5 h-5" />
            <span className="ml-1 font-bold">Education:</span>
            <p className="ml-2 my-2">
              {userData?.edu
                ? userData?.edu
                : "*Please Update Your Profile from Bellow."}
            </p>
          </div>
          <div className="flex items-center">
            <GiSmartphone className="w-5 h-5" />
            <span className="ml-1 font-bold">Phone:</span>
            <p className="ml-2 my-2">
              {userData?.phone
                ? userData?.phone
                : "*Please Update Your Profile from Bellow."}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Update Profile
      </div>

      <form
        className="text-center"
        onSubmit={(e) => {
          e.preventDefault();
          const updateData = {
            ...userData,
            city: e.target.city.value,
            phone: e.target.phone.value,
            edu: e.target.edu.value,
          };

          fetch("https://boiling-garden-56159.herokuapp.com/update_user", {
            method: "put",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              ...updateData,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Profile is up-to-date.");
              setRefetch(!refetch);
              e.target.reset();
            });
        }}
      >
        <label className="flex justify-center  mb-2 input-group input-group-lg">
          <span>
            <GiModernCity />
          </span>
          <input
            required
            name="city"
            type="text"
            placeholder="Your City"
            className="input input-bordered input-md"
          />
        </label>
        <label className="flex justify-center mb-2 input-group input-group-lg">
          <span>
            <MdOutlineSchool />
          </span>
          <input
            required
            name="edu"
            type="text"
            placeholder="Your Recent Education"
            className="input input-bordered input-md"
          />
        </label>
        <label className="flex justify-center mb-2 input-group input-group-lg">
          <span>
            <GiSmartphone />
          </span>
          <input
            required
            name="phone"
            type="number"
            placeholder="Your Phone"
            className="input input-bordered input-md"
          />
        </label>
        <button className="mt-2 mb-10 btn-sm btn bg-sky-400 hover:bg-sky-300 text-white duration-3">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;

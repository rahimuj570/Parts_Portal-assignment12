import React, { useEffect, useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { GrUserAdmin, GrUserExpert } from "react-icons/gr";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";
import AccessDenied from "../User_Management/AccessDenied";
import useRoleUser from "../../Hooks/useRoleUser";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/user`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reFetch]);

  // =======Update user Action ====
  const userRole = (role, user) => {
    setLoad(true);
    fetch("http://localhost:5000/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        name: user?.name,
        role,
        city: user?.city,
        edu: user?.edu,
        phone: user?.phone,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(
          `The role of ${
            user?.name ? user?.name.split(" ").pop() : "GUEST"
          } is ${role}`
        );
        setReFetch(!reFetch);
        setLoad(false);
      });
  };

  // ======== Check Role =========
  if (useRoleUser() === "user") {
    return <AccessDenied />;
  }

  return (
    <>
      <UseTitle title={"Manage Users"} />
      <div className="text-center mt-20 mb-10 border-b-4 md:w-3/6 w-5/6 pb-1 mx-auto text-3xl font-bold">
        Manage Users
      </div>

      <div className="pb-20 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-5/6 mx-auto smax:w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Education
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Make Admin</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user._id}
                className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {user?.name}
                </th>

                <td className="px-6 py-4">
                  <div class="tooltip" data-tip={"email"}>
                    {user?.email}
                  </div>
                </td>
                <td className="px-6 py-4">{user?.city}</td>
                <td className="px-6 py-4">{user?.edu}</td>
                <td className="px-6 py-4">{user?.phone}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4 text-right">
                  {load ? (
                    <div>
                      <div class="tooltip" data-tip="Loading...">
                        <ImSpinner9 className="animate-spin block text-sky-600 cursor-pointer hover:text-sky-500 text-2xl" />
                      </div>
                    </div>
                  ) : user?.role === "admin" ? (
                    <div onClick={() => userRole("user", user)}>
                      <div class="tooltip" data-tip="Make User">
                        <GrUserExpert className="text-sky-600 cursor-pointer hover:text-sky-500 text-2xl" />
                      </div>
                    </div>
                  ) : (
                    <div onClick={() => userRole("admin", user)}>
                      <div class="tooltip" data-tip="Make Admin">
                        <GrUserAdmin className="text-sky-600 cursor-pointer hover:text-sky-500 text-2xl" />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MakeAdmin;

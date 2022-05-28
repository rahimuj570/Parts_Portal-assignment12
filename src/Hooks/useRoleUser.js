import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.int";

const useRoleUser = (email) => {
  const [user] = useAuthState(auth);
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`https://boiling-garden-56159.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((role) => setRole(role.role));
  }, []);
  return role;
};

export default useRoleUser;

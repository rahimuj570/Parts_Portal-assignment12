import React from "react";
import useRoleUser from "../../Hooks/useRoleUser";
import AccessDenied from "../User_Management/AccessDenied";

const ManageAllOrders = () => {
  // ======== Check Role =========
  if (useRoleUser() === "user") {
    return <AccessDenied />;
  }
  return <div></div>;
};

export default ManageAllOrders;

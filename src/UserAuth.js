import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "./Context/DataContext";

const UserAuth = ({ allowedRoles }) => {
  // 0 - Not logged in, 1 - Admin, 2 - User
  // let { manageLogin } = useContext(DataProvider);
  let manageLogin = JSON.parse(localStorage.getItem("manageLogin"));
  // let loggedUserRole = 2

  let screenAccess = allowedRoles.includes(parseInt(manageLogin.role));
  return screenAccess ? <Outlet /> : <h1>Unauthorized user</h1>;
};

export default UserAuth;

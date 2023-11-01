import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import DataProvider from "./Context/DataContext";

const RequireAuth = () => {
  // let { manageLogin } = useContext(DataProvider);
  let manageLogin = JSON.parse(localStorage.getItem("manageLogin"));

  return manageLogin.loginState ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;

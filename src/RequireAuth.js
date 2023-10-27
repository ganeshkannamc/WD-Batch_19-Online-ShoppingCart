import { Outlet } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "./Context/DataContext";

const RequireAuth = () => {
  let { manageLogin } = useContext(DataProvider);
  return manageLogin.loginState ? <Outlet /> : <h1>User not logged in</h1>;
};

export default RequireAuth;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "../Context/DataContext";

const Login = () => {
  let { setManageLogin, manageLogin } = useContext(DataProvider);
  let navigatePage = useNavigate();
  const validUsers = ["ganesh", "kanna", "ram", "sam"];

  function handleLogin() {
    let checkIfValidUser = validUsers.includes(manageLogin.username);

    if (checkIfValidUser) {
      setManageLogin((preValue) => ({ ...preValue, loginState: true }));
      navigatePage("/products");
    } else {
      setManageLogin((preValue) => ({ ...preValue, loginState: false }));
    }
  }

  return (
    <div>
      <input
        type="text"
        id="username"
        value={manageLogin.username}
        onChange={(eve) =>
          setManageLogin((preValue) => ({
            ...preValue,
            username: eve.target.value,
          }))
        }
      />
      <input
        type="password"
        id="password"
        value={manageLogin.password}
        onChange={(eve) =>
          setManageLogin((preValue) => ({
            ...preValue,
            password: eve.target.value,
          }))
        }
      />
      <select
        onChange={(eve) =>
          setManageLogin((preValue) => ({
            ...preValue,
            role: eve.target.value,
          }))
        }
      >
        <option value={2}>Basic</option>
        <option value={1}>Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>

      {!manageLogin.loginState && <h1>Enter the valid user</h1>}
    </div>
  );
};

export default Login;

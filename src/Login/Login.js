import React, { useState } from "react";

const Login = () => {
  const [manageLogin, setManageLogin] = useState({
    username: "",
    password: "",
    role: "",
    loginState: false,
  });
  function handleLogin() {
    console.log(manageLogin);
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
        <option value={0}>Basic</option>
        <option value={1}>Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

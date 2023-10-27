import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "../Context/DataContext";

import "./head.css";

const Header = () => {
  let { manageLogin } = useContext(DataProvider);

  return (
    <div className="header-bar">
      <div>My personal shopping cart - {manageLogin.username}</div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active m-2">
              <NavLink to="products">Home</NavLink>
            </li>

            <li class="nav-item active m-2">
              <NavLink to="cart">Cart</NavLink>
            </li>

            <li class="nav-item active m-2">
              <NavLink to="admin">Admin</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

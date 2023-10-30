import Login from "./Login/Login";
import Header from "./Head/Header";
import ProductList from "./Content/ProductList";
import CartItems from "./Cart/CartItems";
import AllProducts from "./Admin/AllProducts";
import EditProducts from "./Admin/EditProducts";
import AddProducts from "./Admin/AddProducts";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RouteMismatch from "./RouteMismatch";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import LoginLayout from "./LoginLayout";
import RequireAuth from "./RequireAuth";
import UserAuth from "./UserAuth";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<UserAuth allowedRoles={[1]} />}>
            <Route path="/" element={<AdminLayout />}>
              <Route path="/admin" element={<AllProducts />} />
              <Route path="/admin/edit/:id" element={<EditProducts />} />
              <Route path="/admin/add" element={<AddProducts />} />
            </Route>
          </Route>

          <Route element={<UserAuth allowedRoles={[1, 2]} />}>
            <Route path="/" element={<UserLayout />}>
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItems />} />
            </Route>
          </Route>
        </Route>

        <Route path="/*" element={<RouteMismatch />} />
      </Routes>
    </div>
  );
}

export default App;

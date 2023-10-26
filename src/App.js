import Login from "./Login/Login";
import Header from "./Head/Header";
import ProductList from "./Content/ProductList";
import CartItems from "./Cart/CartItems";
import AllProducts from "./Admin/AllProducts";
import EditProducts from "./Admin/EditProducts";
import AddProducts from "./Admin/AddProducts";

import { Routes, Route } from "react-router-dom";
import RouteMismatch from "./RouteMismatch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/admin" element={<AllProducts />} />
        <Route path="/admin/edit/:id" element={<EditProducts />} />
        <Route path="/admin/add" element={<AddProducts />} />

        <Route path="/*" element={<RouteMismatch />} />
      </Routes>
    </div>
  );
}

export default App;

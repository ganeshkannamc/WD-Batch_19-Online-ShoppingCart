
import React from "react";

const CartItems = () => {
  return (
    <div>
      <table className="table table-bordered">
        <tr>
          <th>ProductId</th>
          <th>Brand</th>
          <th>ProductName</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Samsung</td>
          <td>Flip</td>
          <td>
            <button className="btn btn-primary">-</button>
            <input className="cart-count" type="number" value={5} />
            <button className="btn btn-primary">+</button>
          </td>
          <td>2000</td>
        </tr>
      </table>
    </div>
  );
};

export default CartItems;

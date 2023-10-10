import React from "react";

const DisplayProduct = ({ item }) => {
  return (
    <div className="display-item">
      <p>{item.brand}</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div className="cart">
        {item.cartCount == 0 && (
          <button className="btn btn-primary">Add to cart</button>
        )}

        {item.cartCount > 0 && (
          <>
            <button className="btn btn-primary">-</button>
            <input
              className="cart-count"
              type="number"
              value={item.cartCount}
            />
            <button className="btn btn-primary">+</button>
          </>
        )}
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default DisplayProduct;

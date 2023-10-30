import DataContext from "../Context/DataContext";
import { useContext, useEffect } from "react";

const DisplayProduct = ({ item }) => {
  let { feed, setFeed } = useContext(DataContext);

  function handleAddToCart(eve) {
    let updatedFeed = feed.map((item) => {
      if (item.id == eve.target.id) {
        item.cartCount += 1;
        item.isAdded = true;
      }
      return item;
    });
    setFeed(updatedFeed);
  }

  function handleCartCount(eve) {
    let updatedFeed;
    switch (eve.target.name) {
      case "decre":
        updatedFeed = feed.map((item) => {
          if (item.id == eve.target.id) {
            item.cartCount -= 1;
          }
          return item;
        });

        setFeed(updatedFeed);
        break;
      case "incre":
        updatedFeed = feed.map((item) => {
          if (item.id == eve.target.id) {
            item.cartCount += 1;
            item.isAdded = true;
          }
          return item;
        });
        setFeed(updatedFeed);
        break;
      default:
        break;
    }
  }

  return (
    <div className="display-item">
      <p>{item.brand}</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div className="cart">
        {item.cartCount == 0 && (
          <button
            id={item.id}
            className="btn btn-primary"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}

        {item.cartCount > 0 && (
          <>
            <button
              className="btn btn-primary"
              id={item.id}
              name="decre"
              onClick={handleCartCount}
            >
              -
            </button>
            <input
              className="cart-count"
              type="number"
              value={item.cartCount}
            />
            <button
              className="btn btn-primary"
              id={item.id}
              name="incre"
              onClick={handleCartCount}
            >
              +
            </button>
          </>
        )}
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default DisplayProduct;

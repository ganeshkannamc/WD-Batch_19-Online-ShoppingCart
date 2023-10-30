import DataContext from "../Context/DataContext";
import { useContext } from "react";

const CartItems = () => {
  let { feed, setFeed } = useContext(DataContext);

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
    <div>
      <table className="table table-bordered">
        <tr>
          <th>ProductId</th>
          <th>Brand</th>
          <th>ProductName</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {feed.map(
          (itm, indx) =>
            itm.cartCount > 0 && (
              <tr key={indx}>
                <td>{itm.id}</td>
                <td>{itm.brand}</td>
                <td>{itm.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    id={itm.id}
                    name="decre"
                    onClick={handleCartCount}
                  >
                    -
                  </button>
                  <input
                    className="cart-count"
                    type="number"
                    value={itm.cartCount}
                  />
                  <button
                    className="btn btn-primary"
                    id={itm.id}
                    name="incre"
                    onClick={handleCartCount}
                  >
                    +
                  </button>
                </td>
                <td>{itm.price}</td>
              </tr>
            )
        )}
      </table>
    </div>
  );
};

export default CartItems;

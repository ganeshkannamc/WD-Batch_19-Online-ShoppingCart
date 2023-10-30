import { useContext } from "react";
import DataProvider from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  let { feed, setFeed } = useContext(DataProvider);
  let pageNavigation = useNavigate();

  function handleDelete(eve) {
    let updatedFeed = feed.filter(
      (itm) => itm.id.toString() !== eve.target.id.toString()
    );
    setFeed(updatedFeed);
  }

  return (
    <div>
      <button className="btn btn-primary">Add new item</button>
      <table className="table table-bordered">
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>

        {feed.map((item, indx) => (
          <tr key={indx}>
            <td>{item.id}</td>
            <td>{item.brand}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>
              <button
                className="btn btn-danger"
                id={item.id}
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="btn btn-success"
                onClick={() => pageNavigation(`/admin/edit/${item.id}`)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllProducts;

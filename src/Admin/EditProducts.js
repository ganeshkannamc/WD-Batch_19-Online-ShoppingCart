import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "../Context/DataContext";

const EditProducts = () => {
  let { feed, setFeed } = useContext(DataProvider);

  let [editItem, setEditItem] = useState({
    brand: "",
    name: "",
    price: "",
    description: "",
  });
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    let [getEditItem] = feed.filter((itm) => itm.id == id);
    setEditItem(getEditItem);
  }, []);

  function handleChangeEditItm(eve) {
    setEditItem((preVal) => ({ ...preVal, [eve.target.id]: eve.target.value }));
  }

  function handleSave() {
    let updatedFeed = feed.map((itm) => {
      if (itm.id == id) {
        itm.brand = editItem.brand;
        itm.name = editItem.name;
        itm.price = editItem.price;
        itm.description = editItem.description;
      }
      return itm;
    });
    setFeed(updatedFeed);
  }

  return (
    <div className="m-3">
      <h1>Edit items</h1>
      <div className="form-group row m-2">
        <label for="brand" className="col-sm-2 col-form-label">
          Brand
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="Brand name"
            value={editItem.brand}
            onChange={handleChangeEditItm}
          />
        </div>
      </div>

      <div className="form-group row m-2">
        <label for="product" className="col-sm-2 col-form-label">
          Product name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Product name"
            value={editItem.name}
            onChange={handleChangeEditItm}
          />
        </div>
      </div>

      <div className="form-group row m-2">
        <label for="price" className="col-sm-2 col-form-label">
          Price
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            value={editItem.price}
            onChange={handleChangeEditItm}
          />
        </div>
      </div>

      <div className="form-group row m-2">
        <label for="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="description"
            placeholder="Description"
            value={editItem.description}
            onChange={handleChangeEditItm}
          />
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EditProducts;

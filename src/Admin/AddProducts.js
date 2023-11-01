import { useState, useContext } from "react";
import DataProvider from "../Context/DataContext";

const AddProducts = () => {
  let { setFeed } = useContext(DataProvider);
  let randomId = Math.floor(Math.random() * 1000);

  let [addProducts, setAddproducts] = useState({
    id: randomId,
    cartCount: 0,
    isAdded: false,
  });

  function handleChange(eve) {
    setAddproducts((preVal) => ({
      ...preVal,
      [eve.target.id]: eve.target.value,
    }));
  }

  function handleSubmit() {
    setFeed((preVal) => [...preVal, addProducts]);
  }

  return (
    <div className="m-3">
      <h1>Add items</h1>
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
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row m-2">
        <label for="brand" className="col-sm-2 col-form-label">
          Image
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Product image"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default AddProducts;

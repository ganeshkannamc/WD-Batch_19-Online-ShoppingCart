import React from "react";

const EditProducts = () => {
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
            id="product"
            placeholder="Product name"
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
          />
        </div>
      </div>

<button className="btn btn-primary">Save</button>
    </div>
  );
};

export default EditProducts;

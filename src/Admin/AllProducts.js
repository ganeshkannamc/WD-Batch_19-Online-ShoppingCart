import React from "react";

const AllProducts = () => {
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
        <tr>
          <td>01</td>
          <td>Samsung</td>
          <td>Flip</td>
          <td>5666</td>
          <td>This is flip phone</td>
          <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-success">Edit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AllProducts;

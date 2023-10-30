import "./content.css";
import DisplayProduct from "./DisplayProduct";
import DataContext from "../Context/DataContext";
import { useContext, useEffect } from "react";

const ProductList = () => {
  let { feed } = useContext(DataContext);
  console.log(feed);

  return (
    <div className="products">
      {feed && feed.map((itm, index) => (
        <DisplayProduct key={index} item={itm} />
      ))}
    </div>
  );
};

export default ProductList;

import axios from "axios";
import { useState, useEffect } from "react";

function GetProducts() {
  const [getProduct, setGetProduct] = useState([]);
  const getSelectedProducts = () => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json", {
        params: { product_tags: "vegan" },
      })
      .then((response) => setGetProduct(response.data));
  };

  // useEffect(() => {
  //   getSelectedProducts();
  // }, []);

  return { getProduct, getSelectedProducts };
}
export default GetProducts;

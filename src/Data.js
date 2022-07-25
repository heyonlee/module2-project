import axios from "axios";
import { useState, useEffect } from "react";

const GetData = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then(({ data }) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    console.log(products);
    getProducts();
  }, []);
  console.log(products);
  return products;
};

export default GetData;

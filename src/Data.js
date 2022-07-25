import axios from "axios";
import { useState, useEffect } from "react";

const GetData = () => {
  const [products, setProducts] = useState([]);
  async function getProducts (){
    const {data} = await axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json")
      
        setProducts(data);
      
  };
  useEffect(() => {
    console.log(products);
    getProducts();
  }, []);
  console.log(products);
  return products;
};

export default GetData;

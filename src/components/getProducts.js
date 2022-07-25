import axios from "axios";
import { useState, useEffect } from "react";

function GetProducts() {
  const [getProduct, setGetProduct] = useState([]);
 async function getSelectedProducts (){
    const response = await axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json", {
        params: { product_tags: "vegan" },
      })
      
      setGetProduct(response.data);
  };

  // useEffect(() => {
  //   getSelectedProducts();
  // }, []);

  return { getProduct, getSelectedProducts };
}
export default GetProducts;

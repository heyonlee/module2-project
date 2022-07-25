import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ByBrands from "./ByBrands";
//props 지움
function EachBrand(){
  const [byBrand, setByBrand] = useState([]);

  const { brand } = useParams();   
  console.log({brand})

  const getProductsByBrands = () => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${
          { brand }.brand
        }`
      )
      .then((response) => setByBrand(response.data));
  };

  useEffect(() => {
    getProductsByBrands();
    console.log(byBrand);
  }, []);

  return <ByBrands data={byBrand} />;
}

export default EachBrand;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ByTags from "./ByTags";
//props 지움
function ProductByTags(){
  const [byTag, setByTag] = useState([]);

  const { product_tags } = useParams();   
  console.log({product_tags})

  async function getDataBytags (){
    try{
    const response = await axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${
          { product_tags }.product_tags
        }`
      )
       setByTag(response.data);}
       catch(e){
  
        return null;}


  };

  useEffect(() => {
    getDataBytags();
    console.log(byTag);
  }, byTag);

  return <ByTags data={byTag} />;
}


export default ProductByTags;
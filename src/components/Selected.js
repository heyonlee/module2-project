import React, { useEffect } from "react";
import GetProducts from "./getProducts";

function SelectedProduct(){
const { getProduct,getSelectedProducts} = GetProducts()
useEffect(()=>{
    getSelectedProducts()
},[])    
  console.log(getProduct)
 getProduct.map(x=>console.log(x.brand))


 return (

     <div>
   {getProduct.map(x=>{
     <p>Brand:{x.brand}</p>
   })}
     </div>
    )


}
export default SelectedProduct;
import axios from "axios";


export async function DataByBrands(query){
    try{
      const result = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}`)
      
      return result.data;}
  
      catch(e){
  
          return null;}
      
      
   }
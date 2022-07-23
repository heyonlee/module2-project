import {DataByBrands} from"../DataByBrands"
import {useEffect,useState} from 'react'
function Brands(props){
  const [brands,setBrands]=useState([])
useEffect(()=>{
  
        DataByBrands('essie').then((data)=>{
          console.log(data)
          setBrands(data)
        })

},[])  

    return (
    <div> 
  꾸며야지.. 사진 넣고 광고처럼 베건 화장품.
    </div>
    )
}
export default Brands;
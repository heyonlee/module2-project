function ByBrands (props){
   console.log(props)
    const eachBrand= props.data
return (
    <div>
  {eachBrand.map(x=>
   <div className="eachBrand">
      <ul className="each">
     <li><img src={x.api_featured_image} className="eachBrandImg"
        /></li><br/>
     <li> Brand:{x.brand} </li>
     <li> Name:{x.name}</li>
     <li>Description:{x.description}</li>
     <li>Price:{x.price}</li>
     </ul> </div>  
   )}
    </div>
)

}
export default ByBrands;
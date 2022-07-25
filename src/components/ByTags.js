function ByTags (props){
    console.log(props)
     const eachItem= props.data
 return (
     <div>
   {eachItem.map(x=>
    <div className="byTags">
       <ul className="eachByTags">
      <li><img src={x.api_featured_image} className="ImgByTags"
         /></li><br/>
      <li> Brand:{x.brand} </li>
      <li> Name:{x.name}</li>
      <li>Description:{x.description}</li>
      <li>Tags:{x.tag_list.map(x=>x)}</li>
      <li>Price:{x.price}</li>
      </ul> </div>  
    )}
     </div>
 )
 
 }

export default ByTags;
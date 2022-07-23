
function Search({placeholder,data}){
 console.log(data)

    return (
    <div className="search">
        <div className="searchInputs">
        <input type="text"placeholder={placeholder}/><div className="searchIcon">
        <button>Click</button>
        </div>
    </div>
        {/* <div className="dataResult">
            {data.map((key,index)=>{
                 return <a className ="dataItem" href={data.img_link} target="_blank"><p>{key.name}</p></a> })} 

        
         */}
        {/* </div> */}
   </div>    
      )
}
export default Search;
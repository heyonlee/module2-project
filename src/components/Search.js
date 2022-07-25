import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Search({ placeholder, data }) {
  const navigate = useNavigate();
  console.log(data);
  const [filteredData, setFilteredData] = useState([]);
  const [message, setMessage] = useState('');
    
  const handleFilter =(event) => {
    
      const searchWord = event.target.value
      
      const newFilter = tagList.filter((value)=>{
          return value.toUpperCase( ).includes(searchWord.toUpperCase( ));
      });
      setMessage(event.target.value)
      setFilteredData(newFilter);

  }
  const handleClick = () => {
    // 👇️ clear input value
    setMessage('');
  };
  const hadleRemoveItem =e =>{
   setFilteredData([])
  }
  //<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Those Icons - Flaticon</a>
  const tagList = [
    "Canadian",
    "CertClean",
    "Chemical Free",
    "Dairy Free",
    "EWG Verified",
    "EcoCert",
    "Fair Trade",
    "Gluten Free",
    "Hypoallergenic",
    "Natural",
    "No Talc",
    "Non-GMO",
    "Organic",
    "Peanut Free Product",
    "Sugar Free",
    "USDA Organic",
    "Vegan",
    "alcohol free",
    "cruelty free",
    "oil free",
    "purpicks",
    "silicone free",
    "water free",
  ];

  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} value={message} onChange={handleFilter} />
          <img src="img/search.png" className="searchIcon" />
        </div>
      </div>
    { filteredData.length !== 0 && (
      <div className="dataResult">
        {filteredData.map((key, index) => (
          <p className="dataItem" value ={filteredData} type = "submit" onClick={() => {navigate(`/${key}` ); setMessage([]); setFilteredData([])}}>
            {key}
          </p>
        ))}
      </div>

        )}
    </div>
  );
}
export default Search;


// Reference   How to create a search bar
// https://www.youtube.com/watch?v=x7niho285qs
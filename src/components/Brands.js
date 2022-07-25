import EachBrand from "./EachBrand";
import { useEffect, useState } from "react";
import { DataByBrands } from "../DataByBrands";

import{useNavigate} from 'react-router-dom'

function Brands(props) {
  const navigate =useNavigate()
  const brandList = [
    "almay",
    "alva",
    "anna sui",
    "annabelle",
    
    "benefit",
    "boosh",
    "burt's bees",
    "butter london",
    
    "c'est moi",
    "cargo cosmetics",
    "china glaze",
    "clinique",
    ,
    "coastal classic creation",
    "colourpop",
    "covergirl",
    
    "dalish",
    "deciem",
    "dior",
    "dr. hauschka",
    
    "e.l.f.",
    "essie",
    "fenty",
    "glossier",
    "green people",
    "iman",
    "l'oreal",
    
    "lotus cosmetics usa",
    "maia's mineral galaxy",
    "marcelle",
    "marienatie",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",
    "moov",
    
    "nudus",
    "nyx",
    "orly",
    "pacifica",
    "penny lane organics",
    "physicians formula",
    "piggy paint",
    "pure anada",
    
    "rejuva minerals",
    "revlon",
    "sally b's skin yummies",
    "salon perfect",
    "sante",
    "sinful colours",
    "smashbox",
    "stila",
    "suncoat",
    
    "w3llpeople",
    "wet n wild",
    "zorah",
    "zorah biocosmetiques",
  ];

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    DataByBrands().then((data) => {
      console.log(data);
      setBrands(data);
    });
  }, []);
  console.log(brandList.map((x) => x));

  const renderBrandList = () => {
    return brandList.map((x) => 
    
      <div>
        <div>
          <p>{x}</p>
        </div>
        <div>
          <button>see more</button>
        </div>
      </div>
   );
};
  console.log(renderBrandList());
  console.log(typeof brandList[10]);

  return (
    <div className="brand-flex">
      <ul className="brand-list">
        {brandList.map((x) => (
          <div>
            <li>
              
              <p className="h3">{x.replace(/\b[a-z]/, letter => letter.toUpperCase())}</p>
            </li>
            <li>
              <button className="h3" onClick = {()=>navigate(`/brands/${x}`)}>see more</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Brands;


//정규식 앞글자만 대문자로 바꾸기 message-바꿀 문자열 message.replace(/\b[a-z]/, letter => letter.toUpperCase())
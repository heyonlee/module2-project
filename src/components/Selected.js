import React, { useEffect } from "react";
import GetProducts from "./getProducts";

function SelectedProduct() {
  const { getProduct, getSelectedProducts } = GetProducts();
  useEffect(() => {
    getSelectedProducts();
  }, []);
  console.log(getProduct);
  getProduct.map((x) => console.log(x.brand));

  return (
    <div>
      <p className="h3">Vegan products</p>
      <div className="flex">
        {getProduct.map((x) => (
          <div className="selectedBox">
            <ul className="selected">
              <li>
                <img src={x.api_featured_image} className="selectedImg" />
              </li>
              <br />
              <li> Brand:{x.brand} </li>
              <li> Name:{x.name}</li>
              <li></li>
            </ul>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectedProduct;

//https://velog.io/@coil/React-Element-%EC%97%90-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%9E%85%ED%9E%88%EA%B8%B0
// 콤포넌트에 속성입히기

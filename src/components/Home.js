import { useEffect, useState } from "react";
import { lists } from "./Lists";
import GetData from "../Data";
import RandomImage from "./RandomImage";
import SelectedProduct from "./Selected";

function Home() {
  const RandomImages = GetData();
  console.log(RandomImages);

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="Header">
      <div className="carousel">
        {lists[currentImg]}

        <div className="carousel-actions">
          <button
            id="carousel-button-prev"
            aria-label="Previous Slidex"
            onClick={() => {
              currentImg > 0 && setCurrentImg(currentImg - 1);
            }}
          >
            &lt;
          </button>
          <button
            id="carousel-button-next"
            aria-label="Next Slide"
            onClick={() => {
              currentImg < 2 && setCurrentImg(currentImg + 1);
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="SelectedItem">
        <SelectedProduct />
        {/* <RandomImage data={RandomImages}/> */}
      </div>
      <div></div>
    </div>
  );
}
export default Home;

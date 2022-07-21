import { useEffect, useState } from "react";
import { lists } from "./Lists";

function Home() {
  console.log(0);

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
      <div className="Random-brands">
        <p >Recommendation</p>
      </div>
    </div>
  );
}
export default Home;

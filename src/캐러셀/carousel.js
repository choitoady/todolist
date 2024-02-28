import React, { useState } from "react";
import "./carousel.css";

function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index === 2) return;
    setIndex(index + 1);
  };

  return (
    <div>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{ transform: `translate3d(-${500 * index}px, 0, 0)` }}
        >
          <div className="hamster">
            <img
              src="images/골든햄스터 2.jpg"
              width="500"
              height="400"
              alt="골든햄스터"
            />
          </div>
          <div className="flower">
            <img src="images/꽃 2.jpeg" width="500" height="400" alt="꽃" />
          </div>
          <div className="bird">
            <img
              src="images/새.jpg"
              width="500"
              height="400"
              alt="골든햄스터"
            />
          </div>
        </div>

        <button className="prev" type="button" onClick={prevSlide}>
          이전
        </button>
        <button className="next" type="button" onClick={nextSlide}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Carousel;

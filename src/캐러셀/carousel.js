import React, { useState } from "react";
import "./carousel.css";
import Image from "./image";

function Carousel({ images }) {
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
    <div className="carousel-wrapper">
      <div
        className="carousel2"
        style={{ transform: `translate3d(-${500 * index}px, 0, 0)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            imageName={image.name}
            altText={image.description}
          />
        ))}
      </div>
      <button className="prev" type="button" onClick={prevSlide}>
        이전
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        다음
      </button>
    </div>
  );
}

export default Carousel;

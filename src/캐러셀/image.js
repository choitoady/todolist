import React from "react";

function Image({ imageName, altText }) {
  return (
    <div className="image-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/${imageName}`}
        alt={altText}
        width={500}
        height={400}
      ></img>
    </div>
  );
}

export default Image;

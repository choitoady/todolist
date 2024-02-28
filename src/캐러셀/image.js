import React from "react";

function Image(props) {
  return (
    <div className="image-container">
      <img src={props.src} alt={props.name} width={500} height={400}></img>
    </div>
  );
}

export default Image;

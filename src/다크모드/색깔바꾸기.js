import React, { useState } from "react";

function ChangeColor() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <button onClick={onClick}>{isDarkMode ? "dark" : "white"} button</button>
    </div>
  );
}
export default ChangeColor;

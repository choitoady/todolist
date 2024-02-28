import React from 'react';
import { useState } from 'react';
function Counter() {
  const [number, setNumber] = useState(0);
   
  const inCrease = () => {
    setNumber(number + 1);
  }

  const deCrease = () => {
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick ={inCrease}>+1</button>
      <button onClick ={deCrease}>-1</button>
    </div>
  );
}

export default Counter;
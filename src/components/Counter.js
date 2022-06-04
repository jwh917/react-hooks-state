import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function upOne() {
    // setCount(count + 1);
    setCount((count) => count + 1);

  }

  function downOne() {
    if(count != 0){
      // setCount(count- 1)
            setCount((count) => count - 1);

    }


  }


  return (
    <div>
      <h1>Clicked: {count} times</h1>
      <button onClick={upOne}>UP</button>
      <button onClick={downOne}>DOWN</button>
    </div>
  )
}

export default Counter;

import React from "react";
import { useState } from "react";

function Counter() {
  let counter = 0;
  const counterInicialState = useState(counter);
  const counterValue = counterInicialState[0];
  const setCounter = counterInicialState[1];

  function incrementar() {
    setCounter(counterValue + 1);
  }
  function decrementar() {
    setCounter(counterValue - 1);
  }

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button onClick={decrementar} disabled={counterValue <= 0}>
        -
      </button>
      <p>{counterValue}</p>
      <button onClick={incrementar} disabled={counterValue >= 10}>
        +
      </button>
    </div>
  );
}

export default Counter;

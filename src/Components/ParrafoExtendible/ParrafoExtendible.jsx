import { useState } from "react";
import Counter from "./Components/Counter/Counter";

function ParrafoExtendible() {
  let parrafoOriginal =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, omnis!";

  const valorInicialState = useState(false);

  const valorInicialValue = valorInicialState[0];

  const setValorInicial = valorInicialState[1];

  const parrafoExtendidoState = useState(false);

  const parrafoExtendidoValue = parrafoExtendidoState[0];

  const setParrafoExtendido = parrafoExtendidoState[1];

  function click() {
    setValorInicial(!valorInicialValue);
    setParrafoExtendido(!parrafoExtendidoValue);
  }

  function shrinkText(text, maxLength) {
    return text.split(" ").slice(0, maxLength).join(" ") + "...";
  }

  return (
    <div>
      {parrafoExtendidoValue ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, omnis!
        </p>
      ) : (
        shrinkText(parrafoOriginal, 5)
      )}

      {parrafoExtendidoValue ? (
        <button onClick={click}>Leer menos</button>
      ) : (
        <button onClick={click}>Leer más</button>
      )}

      <Counter />
    </div>
  );
}
export default ParrafoExtendible;

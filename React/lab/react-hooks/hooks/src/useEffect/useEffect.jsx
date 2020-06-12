import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter; // função que executa no Component Did Mount
    return () => (document.title = "Sistemas de Informação"); // Componente Will Unmount => desmontar event listners e observers
  }, [counter]);

  // useEffect(() => {
  // 	document.title = counter
  // }, [counter])

  return (
    <div>
      <button
        style={{ width: 70, height: 30 }}
        onClick={() => setCounter(counter + 1)}
      >
        Click me
      </button>
      <h1>{counter}</h1>
    </div>
  );
}

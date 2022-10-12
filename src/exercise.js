import { useState, useEffect } from "react";
export function Exercise() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button onClick={() => { setContador(contador + 1) }}>Contar</button>
      <p> {contador}</p>
    </div>
  )
}
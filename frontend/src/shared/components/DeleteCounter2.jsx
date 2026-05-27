// import { useState, useEffect } from "react";

// export default function DeleteCounter2(){

//     const [count, setCount] = useState(0);
//     const [ message, setMessage] = useState("El contador no ha cambiado");

//     useEffect(() => {
//         setMessage(`El contador cambió a: ${count}`)
//     }, [count]);

//     return(
//         <div>
//             <h2>{count}</h2>
//             <p>{message}</p>

//             <button onClick={() => setCount(count + 1)} className="border p-[12px]">
//                 Incrementar
//             </button>
//         </div>
//     )
// }



// /src/components/CounterEffect.jsx
import { useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  const message =
    count === 0
      ? "El contador no ha cambiado"
      : `El contador cambió a ${count}`;

  return (
    <div>
      <h2>{count}</h2>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default CounterEffect;

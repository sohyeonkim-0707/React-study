import { useState, useRef } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);
//   // console.log(countRef, "π±"); // countRef.current
//   console.log("λ λλ§", "π");

//   const increaseCountState = () => {
//     setCount(count + 1);
//   };

//   // refλ μλ¬΄λ¦¬ μλ°μ΄νΈν΄λ μ»΄ν¬λνΈλ₯Ό λ λλ§ μν€μ§ μμ
//   const increaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log("Ref:", countRef.current);
//   };

//   return (
//     <div>
//       <p>state:{count}</p>
//       <p>Ref:{countRef.current}</p>
//       <button onClick={increaseCountState}>state μ¬λ €</button>
//       <button onClick={increaseCountRef}>Ref μ¬λ €</button>
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // console.log(countRef);
  console.log("λ λλ§ π");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      <p>state:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>state μ¬λ €</button>
      <button onClick={increaseCountRef}>Ref μ¬λ €</button>
    </div>
  );
};

export default App;

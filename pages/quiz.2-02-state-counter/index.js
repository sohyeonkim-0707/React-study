import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  let setCounter = () => {
    document.getElementById(setCount(count + 1));
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={setCounter}>카운트 올리기!!!</button>
    </div>
  );
}

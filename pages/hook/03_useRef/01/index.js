import { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // console.log(countRef, "🌱"); // countRef.current
  console.log("렌더링", "📌");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  // ref는 아무리 업데이트해도 컴포넌트를 렌더링 시키지 않음
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      <p>state:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>state 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default App;

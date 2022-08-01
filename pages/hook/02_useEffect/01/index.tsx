import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될 때마다 매번 실행 - 렌더링 이후
  //   useEffect(() => {
  //     console.log("렌더링 🦀");
  //   });

  // 마운팅 + [count]가 변화될때마다 실행됨
  //   useEffect(() => {
  //     console.log("count 변화 🐥");
  //   }, [count]);

  // 마운팅 + [name]가 변화될때마다 실행됨
  //   useEffect(() => {
  //     console.log("name 변화 🐬");
  //   }, [name]);

  useEffect(() => {
    console.log("마운팅 🐢");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count:{count}</span>
      <br></br>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

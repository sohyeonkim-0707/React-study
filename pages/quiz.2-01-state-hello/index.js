import { useState } from "react";

export default function HelloPage() {
  const [hello, setHello] = useState("안녕하세요");

  function sayHello() {
    setHello("반갑습니다.");
  }

  return (
    <div>
      <button onClick={sayHello}>{hello}</button>
    </div>
  );
}

// prev
import { useState } from "react";

export default function PrevQuizPage() {
  const [state, setState] = useState(0);
  const onClcikCounter = () => {
    setState((qwer) => qwer + 1);
  };

  return (
    <>
      <div>햔제 카운트:{state}</div>
      <button onClick={onClcikCounter}> 카운트 증가</button>
    </>
  );
}

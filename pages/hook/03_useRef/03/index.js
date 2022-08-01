// App 이 몇번 렌더링이 되었는지 확인
// 📌 변화는 감지해야하지만 그 변화가 렌더링을 발생시키면 안되는 어떤 값을 다룰때 정말 편리하다
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);

  const renderCount = useRef(1);

  // ref는 리렌더링을 하지 않으니 무한루프에 빠지지 않음
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수:", renderCount.current);
  });
  renderCount.current;

  // 무한렌더링 ☠️
  // useEffect(()=>{
  //     console.log('무한렌더링')
  //     setRenderCount(renderCount+1)
  // })

  return (
    <div>
      <p>count : {count}</p>
      {/* 올려버튼이 눌릴때마다 count가 1씩 증가 */}
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default App;

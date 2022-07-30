import { useState } from "react";

// cost [state setTime] = useState(초기값)
export default function useStatePage() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    // 시간이 12부터 크다면 즉 넘어간다면
    if (time >= 12) {
      // 다시 뉴타입을 1로 설정을 해준다.
      newTime = 1;
    } else {
      // 그렇지 않으면 그냥 현재시간에 + 1 씩 증가
      newTime = time + 1;
    }
    setTime(newTime);
  };

  // console.log("업데이트!!!");

  return (
    <div>
      <span>현재 시각 : {time}시 </span>
      <button onClick={handleClick}>update</button>
    </div>
  );
}

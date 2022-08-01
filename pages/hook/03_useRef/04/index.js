// dom 요소에 접근

import { useEffect, useRef } from "react";

const App = () => {
  // 초기값은 비운다. 어차피 inputRef 안에는 input 요소가 들어갈 것이기 때문
  const inputRef = useRef();

  // 맨 처음 렌더링이 될 때 실행될 useEffect를 만들어주자.
  // 빈 배열을 넣기
  useEffect(() => {
    // inpufRef에 뭐가 들었는지 확인해보자.
    // console.log(inputRef); // {current: input}
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;

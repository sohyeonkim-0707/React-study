import { useInput } from "./useInput";

// 팝업 띄우기!!
// submitAction 으로 displayMessage를 넣어준다.
// submitAction 은 커스텀 훅에서 인자로 inputValue 을 넣어주니까
// displayMessage도 매게변수로 message 전달
// 내용은  alert(message)
// displayMessage 함수를 useInput의 두번째 인자로 넣어준다.
function displayMessage(message) {
  alert(message);
}

function App() {
  //useInput 의 두 번째 인자로, 확인 버튼을 눌렀을 때 불려지게 될 함수를 담아주는데,
  // 그 함수는 컴포넌트 바깥에 만들어준다.
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;

//useInput 훅
import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // input state를 빈 문자열로 초기화
    setInputValue("");
    // 매개변수로 받아온 submitAction을 호출해준다. 인자로는 inputValue
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}

// 1-2. useRef로 포커스 맞추기
//1. 비밀번호 입력창 1개를 만들어 주세요.
//2. 해당 페이지에 접속하면 자동으로 비밀번호에 커서가 깜빡이도록 만들어 주세요.
//⇒ 힌트) useEffect에서 useRef를 사용해야 합니다.

// 함수형
import { useEffect, useRef } from "react";

export default function PasswordPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      비밀번호: <input type="text" ref={inputRef} />
    </div>
  );
}

// 클래스형
// import { Component, createRef } from "react";

// interface IState {
//   count: number;
// }
// export default class CounterPage extends Component {
//   inputRef = createRef<HTMLInputElement>();

//   componentDidMount() {
//     console.log("마운트됨!!!");
//     this.inputRef.current?.focus();
//     // 포커스 깜빡깜빡
//   }

//   render() {
//     return (
//       <div>
//         비밀번호: <input type="text" ref={this.inputRef} />
//       </div>
//     );
//   }
// }

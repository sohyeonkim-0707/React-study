import { useState } from "react";

export default function TokenStatePage() {
  const [token, setToken] = useState(0);

  let randomToken = () => {
    const tokenNumber = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      "0"
    );
    setToken(tokenNumber);
  };

  return (
    <div>
      <div>{token}</div>
      <button onClick={randomToken}>인증번호 생성</button>
    </div>
  );
}

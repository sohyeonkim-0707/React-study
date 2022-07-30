import { useState } from "react";

const heaywork = () => {
  console.log("무거운작업");
  return ["둘리", "짱구"];
};

export default function useStatePage() {
  const [names, setNames] = useState(() => {
    return heaywork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // console.log(input);

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전스테이트:", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

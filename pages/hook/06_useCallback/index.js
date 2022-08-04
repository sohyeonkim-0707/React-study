import { useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // CSS를 담은 오브젝트를 반환
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Chagne Theme</button>
      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  );
}

export default App;

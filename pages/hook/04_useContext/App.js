// // 최상위
// // props 를 사용하지 않고 context 를 통해 하위 컴포넌트에 데이터 전달
// import { useState } from "react";
// import "./App.css";
// import Page from "./Compopnents/Page";
// import { ThemeContext } from "./context/ThemeContext";
// import { UserContext } from "./context/UserContext";

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <UserContext.Provider value={"사용자"}>
//       <ThemeContext.Provider value={{ isDark, setIsDark }}>
//         <Page />
//       </ThemeContext.Provider>
//     </UserContext.Provider>
//   );
// }
// export default App;

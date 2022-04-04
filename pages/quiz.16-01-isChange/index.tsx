// 컴포넌트 생명주기
// useEffect 가 필요한 이유
// 컴포넌트가 렌더링 된 후, 혹은 컴포넌트가 업데이트 될 때마다 실행시키고 싶은 작업이 있을 시 사용

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function lifecyclePage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, []);

  //나갈때
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    setIsChange(true);
    router.push("/");
  };

  return (
    <div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}

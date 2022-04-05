// 퀴즈 2-1 axios로 rest 기반 open-api 사용하기
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState(""); // 이미지 주소의 초기값

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>오픈 API 로 강쥐들에게 인사하기 </div>
      <img src={dogUrl} />
    </div>
  );
}

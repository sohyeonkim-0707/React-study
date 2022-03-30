// 2-1 주소겁색 라이브러리
// 빈 화면에 주소검색화면이 나타나도록 만들어 주세요 (해결)
// 주소 검색 후, 최종적으로 주소를 선택하면 주소검색화면이 자동으로 사라지도록 만들어 주세요. (해결못함)
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const handleComplete = (data) => {
    console.log(data);
  };

  return (
    <>
      <DaumPostcode onComplete={handleComplete} />
    </>
  );
}

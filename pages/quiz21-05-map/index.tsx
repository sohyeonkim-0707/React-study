export default function Map() {
  ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    console.log(`${el}는 ${index}번째 칸에 들어있습니다.`);
  });

  return <div>el 확인하기</div>;
}

// 창이 안떠

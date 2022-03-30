// 달력
// 날짜를 클릭하면 날짜선택버튼 아래쪽에 날짜를 나타내 보세요
// 위에서 나타낸 날짜에서 월만 나타내 보세요
import { DatePicker } from "antd";
import { useState } from "react";

export default function CalenderPage() {
  const [data, setData] = useState();

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function onSelect(value) {
    setData(value.format("YYYY-MM"));
  }

  return (
    <div>
      <DatePicker onChange={onChange} onSelect={onSelect} />
      <div>{data}</div>
    </div>
  );
}

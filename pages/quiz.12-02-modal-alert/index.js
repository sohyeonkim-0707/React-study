// 2-2 모달 라이브러리 경고창 만들기
// 1) 모달 열기 버튼 만들기
// 2) 모달열기 버튼을 누르면 모달이 나타나도록 만들어주세요
// 3) 모달 안의 내용으로는 "게시글이 등록되었습니다."

import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickModaldButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다!!" });
  };

  return (
    <div>
      <button onClick={onClickModaldButton}>모달 열기</button>
    </div>
  );
}

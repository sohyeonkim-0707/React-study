// 2-3 모달 라이브러리와 주소검색 라이브러리 연동하기

// 모달커스텀
import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    setMyAddress(data.address);
    //console.log(data); // setMyAddress(data) 주석처리하고 //console.log(data) 찍으면 키값 address을 확인할 수 있음
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달 열기</Button>
      {/* 모달 삭제하고 새로 만드는 방법 조건부 렌더링 방식 */}
      {isOpen && (
        <Modal
          visible={true} // 항상 true
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* 아래 주소 나오는 것 */}
      <div>{myAddress}</div>
    </>
  );
}

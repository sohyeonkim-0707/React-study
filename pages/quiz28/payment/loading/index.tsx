// 로그인 성공페이지
// 상품선택
// 결제
import { useState } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);

  const onChanageSubmit = (event) => {
    setAmount(event.target.value);
  };
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp56277874"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주석하면 랜덤으로 생성됨 상품아이디 (중복되지 않게!)
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "김소현",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        //m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // rsp 에 뭐가 들어오는지 확인
          console.log(rsp);

          // 백엔드에 결제 관련 데이터 넘겨주기(즉, mutation 실행하기)
          // ex. createPointTransactionOfLoading
          alert("결제에 성공했습니다!!!");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!!!");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <select onChange={onChanageSubmit}>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>

      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}

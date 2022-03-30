// 2번째 과제
// 앞서 하드코딩한 과정을 createProduct에 대해서 동일하게 진행해 보세요.

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

//graphql 코드생성
const CREATE_BOARD = gql`
  mutation mymutation($aaa: String, $bbb: CreateProductInput!) {
    createProduct(seller: $aaa, createProductInput: $bbb) {
      _id
      number
      message
    }
  }
`;

export default function QuizGraphqlProductApiPage() {
  const [mySeller, setMySeller] = useState("");
  const [myProduct, setMyProduct] = useState("");
  const [myDetail, setMyDetail] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [createProduct] = useMutation(CREATE_BOARD);
  //위에서 만든 gql 변수/상수 를 이용해서 useMutation을 만들어줌

  const callGraphqlApi = async () => {
    //await +서버에 요청하는 코드
    const result = await createProduct({
      variables: {
        aaa: mySeller,
        bbb: {
          name: myProduct,
          detail: myDetail,
          price: myPrice,
        },
      },
    });

    //결과 찍어보기
    console.log(result);
  };
  const onChangeSeller = (event) => {
    setMySeller(event.target.value);
  };
  const onChangeProduct = (event) => {
    setMyProduct(event.target.value);
  };
  const onChangeTitle = (event) => {
    setMyDetail(event.target.value);
  };
  const onChangeContents = (event) => {
    setMyPrice(parseInt(event.target.value));
    //parseInt 쓰게되면 한글로 1000원이라고 입력해도 문자열로 된 부분에서 숫자(정수)만 뽑아서 가져가기 때문에 써도됨 > 사실상 이것이 맞는 것.
  };

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      제품명: <input type="text" onChange={onChangeProduct} />
      <br />
      상세내용: <input type="text" onChange={onChangeTitle} />
      <br />
      가격: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}> GRAPHQL-API 요청하기 </button>
    </div>
  );
}

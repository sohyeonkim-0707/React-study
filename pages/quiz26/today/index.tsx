// 오늘 본 상품 나타내기

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getDate } from "../../../src/commons/libraries/data/utils";
import { IBoard } from "../../../src/commons/types/generated/types"; // codegen

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  :hover {
    background: beige;
  }
`;
const MyColumn = styled.div`
  width: 250px;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  background: yellow;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS, {});
  const [isToday, setIsToday] = useState([]);

  // 날짜함수 만들어주기
  const getDate = new Date();
  const yyyy = getDate.getFullYear();
  const mm = getDate.getMonth() + 1;
  const dd = getDate.getDay() + 17;

  const today = `${yyyy}-${mm}-${dd}`;

  // console.log("today", today); 날짜 찍어보기

  useEffect(() => {
    const todayProduct = JSON.parse(localStorage.getItem(today) || "[]");
    setIsToday(todayProduct);
  }, []);

  const onClickBasket = (el) => () => {
    console.log(el);
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem(today) || "[]"); // 지난번까지 담았던 장바구니

    // 2. 이미 담겼는지 확인하기 (중복체크)
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id); // temp 임시로 담아놓는다
    if (temp.length === 1) {
      alert("이미 당신 물품입니다!!!");
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(today, JSON.stringify(baskets));
  };

  return (
    <div>
      <div>
        {data?.fetchBoards.map((el: IBoard) => (
          <MyRow key={el._id} onClick={onClickBasket(el)}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
      <div>
        <Wrapper>오늘 본 상품</Wrapper>
        {isToday.map((el) => (
          <MyRow>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
    </div>
  );
}

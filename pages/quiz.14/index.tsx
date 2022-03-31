// 퀴즈 페이지네이션구현하기
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import * as S from "./style";

// 게시글 몇번 보여줘가 아니라 전체 보여주니까 넘버 빼도 됨
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1); // 기준페이지 1
  const [current, setCurrent] = useState(1);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const [isActive, setIsActive] = useState(true);

  // 이전 10 페이지 클릭함수
  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive(false);
      return;
    } else {
      setIsActive(true);
      setStartPage((prev) => prev - 10);
      refetch({ page: startPage - 10 });
    }
  };

  // 다음 10페이지 클릭함수
  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) {
      setIsActive(false);
      return;
    } else {
      setIsActive(true);
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
    }
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>{el.writer}</S.MyColumn>
          <S.MyColumn>{el.title}</S.MyColumn>
        </S.MyRow>
      ))}

      <S.Cursor onClick={onClickPrevPage}> &lt; </S.Cursor>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <S.Page
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              current={index + startPage === current}
            >
              {` `}
              {index + startPage}
            </S.Page>
          )
      )}

      <S.Cursor onClick={onClickNextPage}> &gt; </S.Cursor>
    </div>
  );
}

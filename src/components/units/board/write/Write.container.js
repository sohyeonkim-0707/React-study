import { useState } from "react";
import { useMutation } from "@apollo/client";
import WriteUI from "./Write.presenter";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./Write.queries";

export default function Write() {
  // 전체 칸이 채워졌을 때  버튼 색 바뀌는 함수
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [myWriter, setMywriter] = useState("");
  const [myTitle, setMytitle] = useState("");
  const [myContents, setMycontents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      });
      console.log(result);
      console.log(result.data.createBoard.message);
      setData(result.data.createBoard.message);
      alert("게시글 등록에 성공했어요!");
      alert("상세 페이지로 이동해 볼까요?");
      router.push(`/quiz.6-02/${result.data.createBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setMywriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setMytitle(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event) => {
    setMycontents(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <WriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}
    />
  );
}

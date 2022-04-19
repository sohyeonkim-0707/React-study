import { useState } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ProductPage() {
  const [title, setMytitle] = useState("");
  const [contents, setMycontents] = useState("");
  const [writer, setMywriter] = useState("");
  const [password, setMyPassword] = useState("");

  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit } = useForm();

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // el._id가 안되므로,  readFiled에서 꺼내오기
              return [...filteredPrev]; // 9개 리턴
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoard: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div>작성자: '{el.writer}'</div>
          <div>제목: '{el.title}'</div>
          <div>내용: '{el.contents}'</div>
          <button onClick={onClickDelete(el._id)}>X</button>
          <hr></hr>
        </div>
      ))}

      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <br />
        <input type="text" placeholder="내용" {...register("contents")} />
        <br />
        <input type="text" placeholder="작성자" {...register("writer")} />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <br />
        <button>등록하기</button>
      </form>
    </div>
  );
}

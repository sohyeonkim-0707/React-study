import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/input";
import Button01 from "../../src/components/commons/button";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 20px;
`;

// 아래 schema는 컴포넌트 분리시 .validation.ts 라는 파일로 보관하기
const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내로 입력해주세요.")
    .required("작성자를 입력해주세요"),
  password: yup
    .string()
    // .max(8, "비밀번호는 최대 8자리 입니다 ")
    .matches(
      /^(?=.*\d)(?=.*[@$^!%*#?&])[A-Za-z\d@$!%*#^?&]{4,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),

  title: yup
    .string()
    .max(100, "제목은 100자 이내로 입력해주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
});

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 isActive={formState.isValid} title="등록하기" />
    </form>
  );
}

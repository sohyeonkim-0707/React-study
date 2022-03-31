// 퀴즈 페이지네이션 스타일
import styled from "@emotion/styled";

export const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MyColumn = styled.div`
  width: 400px;
  height: 45px;
  margin-left: 10px;
`;

interface IProps {
  current: boolean;
}
export const Page = styled.span`
  cursor: pointer;
  color: ${(props: IProps) => (props.current === true ? "red" : "black")};
`;

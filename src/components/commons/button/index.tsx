import styled from "@emotion/styled";

interface IBtnprops {
  isActive?: boolean;
  title?: string;
}

const Button = styled.button`
  background-color: ${(props: IBtnprops) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props: IBtnprops) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}

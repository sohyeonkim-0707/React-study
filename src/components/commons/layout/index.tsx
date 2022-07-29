// 각각의 컴포넌트를 하나로 조립하는 곳
import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { ReactNode } from "react";

const BodyWrapper = styled.div`
  display: flex;
`;
// 바디영역
const Body = styled.div`
  height: 500px;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}

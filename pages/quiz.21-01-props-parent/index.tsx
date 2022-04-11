import Presenter from "../quiz.21-02-props-child";

// container 부분
export default function Container() {
  //return (<><Presenter child="철수" /></>);
  return <>{Presenter({ child: "철수" })}</>;
}

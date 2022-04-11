// container 부분
import Presenter from "../quiz.21-04-props-child";
export default function Container() {
  return <>{Presenter({ child: "철수", age: 13 })}</>;
}

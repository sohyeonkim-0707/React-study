import {Hello} from './Read.styles'

export default function ReadUI(props) {

    return(
      <div>
        <Hello>{props.data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</Hello>
        <div>작성자:{props.data?.fetchBoard.writer}</div>
        <div>제목:{props.data?.fetchBoard.title}</div>
        <div>내용:{props.data?.fetchBoard.contents}</div>
    </div>
    )
}
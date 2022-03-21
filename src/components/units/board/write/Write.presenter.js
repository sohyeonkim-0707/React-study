import * as S from './Write.styles'

export default function WriteUI(props) {

    return(
      <div>
          {/* <div>{data}</div> */}
          작성자: <S.Writer type="text" onChange={props.onChangeWriter}></S.Writer><br/>
          제목: <S.Title type="text" onChange={props.onChangeTitle}></S.Title><br/>
          내용: <S.Content type="text" onChange={props.onChangeContents}></S.Content><br/>
          <S.Button onClick={props.callGraphqlApi}  isActive={props.isActive}>GRAPHQL-API 요청하기!!!</S.Button>
      </div>
    )
}
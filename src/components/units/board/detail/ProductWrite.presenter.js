//퀴즈 프리젠터
export default function ProductUI(props) {
    
  return(
    <div>
      <h1>{props.isEdit ? "상품수정" : "상품등록"} 페이지</h1>
      판매자: <input type="text" onChange={props.onChangeSeller}/><br/>
      제품명: <input type="text" onChange={props.onChangeProduct}/><br/>
      상세내용: <input type="text" onChange={props.onChangeTitle}/><br/>
      가격: <input type="text" onChange={props.onChangeContents}/><br/>
      <button onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}> {props.isEdit ? "상품수정" : "상품등록"}하기 </button>
  </div>
  )
}


//1. [ GRAPHQL-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 createBoard 라는 API에 mutation을 요청해서 프로필을 등록해 보세요.(작성자, 제목, 내용은 하드코딩합니다.)
//2. 위 1번에서 등록한 데이터를 console.log()로 출력해 보세요. >>>>>>> 2번에서 막힌 것 같은데 .... 
//3. 위 2번에서 등록한 데이터를 playground에서 fetchBoard 를 요청해서 정말 등록이 되었는지 확인해 보세요.
//4. 위 3번의 과정을 하드코딩 하지 않고,  작성자, 제목, 내용에 대해서 <input /> 태그와 state를 각각 만들고, 직접 입력 받은 작성자, 제목, 내용으로 mutation을 요청해 주세요.
//5. 위 4번에서 등록한 데이터를 console.log()로 출력해 보세요.
//6. 위 5번에서 등록한 데이터를 playground에서 fetchBoard를 요청해서 정말 등록이 되었는지 확인해 보세요.
//7. 위 6~7번에 대한 과정을 createProduct에 대해서 동일하게 진행해 보세요.


import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

//graphql 코드생성
const CREATE_BOARD = gql`
    mutation mymutation($aaa:String, $bbb:CreateProductInput!){
        createProduct(
            seller:$aaa, 
            createProductInput:$bbb){
                _id
                number
                message
                }
    }
`

export default function QuizGraphqlProductApiPage(){
    const [mySeller,setMySeller] = useState("")
    const [myProduct,setMyProduct] = useState("")
    const [myDetail,setMyDetail] = useState("")
    const [myPrice,setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_BOARD)
    //위에서 만든 gql 변수/상수 를 이용해서 useMutation을 만들어줌 

    const callGraphqlApi = async () => {
                    //await +서버에 요청하는 코드
        const result = await createProduct({ 
            variables: {
                aaa: mySeller, 
                bbb:{
                    name: myProduct, 
                    detail: myDetail, 
                    price: myPrice
                }
            } 
        })
        
        //결과 찍어보기
        console.log(result)
    }
    const onChangeSeller = (event) =>{
        setMySeller(event.target.value)
    }
    const onChangeProduct = (event) =>{
        setMyProduct(event.target.value)
    }
    const onChangeTitle = (event) =>{
        setMyDetail(event.target.value)
    }
    const onChangeContents = (event) =>{
        setMyPrice(parseInt(event.target.value))
        //setMyPrice(event.target.valueAsNumber) 
        //setMyPrice(event.target.value) >> 이거 쓸거면 위에 price:paseint(myPrice) 바꿔주면 가능\
        //parseInt 쓰게되면 한글로 1000원이라고 입력해도 문자열로 된 부분에서 숫자(정수)만 뽑아서 가져가기 때문에 써도됨 > 사실상 이것이 맞는 것. 
        
        }


    return(
        <div>
            판매자: <input type="text" onChange={onChangeSeller}/>
            제품명: <input type="text" onChange={onChangeProduct}/>
            상세내용: <input type="text" onChange={onChangeTitle}/>
            가격: <input type="text" onChange={onChangeContents}/>
            <button onClick={callGraphqlApi}> GRAPHQL-API 요청하기 </button>
        </div>
    )
}


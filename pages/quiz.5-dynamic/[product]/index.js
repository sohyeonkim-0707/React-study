//@apollo/client의 useQuery훅을 불러와 사용한다. 
//graphql-tag 패키지에서 제공하는 gql이라는 temperal literal tag을 사용해서
//일반 자바스크립트 문자열을 Graphql 구문으로 바꿔준다. 
//그 다음 @apolo/react-hooks 패키지에서 import한 useQuery 리액트 함수에
//이 graphql 쿼리를 인자로 넘겨서 호출!!!
//그러면 useQuery 함수는 응답데이터(data) 뿐만 아니라, 로딩(loading)여부와 오류(error)까지 함께 리턴한다

import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

//세팅부분
const FETCH_BOARD = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function StaticRoutedPage() {
    const router = useRouter()
    console.log(router) //라우터내용확인

    //useQuery 조회 실행부분
    const {data} = useQuery(FETCH_BOARD,{
        variables:{productId:router.query.product} 
    })
    console.log(data) //데이터확인


    return(
        <div>
            <div>판매자:{data? (data.fetchProduct.seller):('loading...')}</div>
            <div>제품명:{data? (data.fetchProduct.name):('loading...')}</div>
            <div>상세내용:{data? (data.fetchProduct.detail):('loading...')}</div>
            <div>가격:{data? (data.fetchProduct.price):('loading...')}</div>
        </div>
    )

}


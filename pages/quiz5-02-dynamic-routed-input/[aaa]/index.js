import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_BOARD = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }

`

export default function StaticRoutedPage(){
    const router =useRouter()
    console.log(router) //라우터내용확인

    const { data } = useQuery(FETCH_BOARD,{
        variables:{message:Number(router.query._id)} //여기오류 있는 것 같은데 
    })

    console.log(data) //데이터확인


    return(
        <div>
            <div>판매자:{data?.fetchProduct.seller}</div>
            <div>제품명:{data?.fetchProduct.name}</div>
            <div>상세내용:{data?.fetchProduct.detail}</div>
            <div>가격:{data?.fetchProduct.price}</div>
        </div>
    )

}

 
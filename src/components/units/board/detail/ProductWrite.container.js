//퀴즈 콘테이너
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import ProductUI from './ProductWrite.presenter'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './ProductWrite.queries'
import { useRouter } from 'next/router'

export default function ProductPage(props){
    const router = useRouter()
    
    const [mySeller,setMySeller] = useState("")
    const [myProduct,setMyProduct] = useState("")
    const [myDetail,setMyDetail] = useState("")
    const [myPrice,setMyPrice] = useState("")


    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)


    //상품 수정 업데이트
    //수정하기일때만 실행되는 함수
    //플레이그라운드 보기 
    const onClickUpdate = async () => {
       await updateProduct({
        variables:{productId:router.query.productId,
            updateProductInput:{
                name:myProduct,
                detail:myDetail,
                price:myPrice
            }
        }
      })
        alert("상품 수정에 성공했습니다.!!!")
      router.push(`/quiz.8/${router.query.productId}`)
    }
    
    
    const callGraphqlApi = async () => {
            
            const result = await createProduct({ 
                variables: {seller: mySeller, createProductInput:{
                        name: myProduct, 
                        detail: myDetail, 
                        price: myPrice}
                    } 
            })
            // graphql-api 방식
            //console.log(result)
            // console.log(result.data.createBoard._id)
            // setData(result.data.createBoard._id)
            //console.log(result.data.createProduct._id)
            alert("게시물 등록에 성공했습니다.")
            alert("상세페이지로 이동합니다.")
            router.push(`/quiz.8/${result.data.createProduct._id}`)
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
    }

    return(
        <ProductUI
            onChangeSeller={onChangeSeller} 
            onChangeProduct={onChangeProduct}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
        />
    )
}
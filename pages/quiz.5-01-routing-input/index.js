import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const CREATE_BOARD = gql`
    mutation mymutation($seller:String, $createProductInput:CreateProductInput!){
        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id
            number                      
            message
            }
        }
    `

export default function StaticRoutingPage(){
    const router = useRouter()
    
    const [mySeller,setMySeller] = useState("")
    const [myProduct,setMyProduct] = useState("")
    const [myDetail,setMyDetail] = useState("")
    const [myPrice,setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_BOARD)
    

    const callGraphqlApi = async () => {
    try{
            const result = await createProduct({ 
                variables: {
                    seller: mySeller, 
                    createProductInput:{
                        name: myProduct, 
                        detail: myDetail, 
                        price: myPrice
                    }
                } 
            })
            console.log(result)
            //console.log(result.data.createProduct._id) //id값 받아옴 > 여긴 성공 
            console.log(result.data.createProduct.message) //id값 받아옴 > 여긴 성공 //
            router.push(`quiz5-02-dynamic-routed-input/${result.data.createProduct.message}`)//여기 문제가 있는 것 같은데

        }catch(error){
            console.log(error.message)
        }
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
        <div>
            판매자: <input type="text" onChange={onChangeSeller}/>
            제품명: <input type="text" onChange={onChangeProduct}/>
            상세내용: <input type="text" onChange={onChangeTitle}/>
            가격: <input type="text" onChange={onChangeContents}/>
            <button onClick={callGraphqlApi}> 등록하기 </button>
        </div>
    )
}


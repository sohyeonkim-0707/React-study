import { useQuery, gql, useMutation } from "@apollo/client"
import styled from '@emotion/styled'

//몇번 보여줘가 아니라 전체 보여주니까 넘버 빼도 됨
const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId:ID){
        deleteProduct(productId:$productId){
            message
        }
    }
`

const Row = styled.div`
  display:flex;
  flex-direction:row;
`
const Column = styled.div`
  width:20%;
`

export default function MapProductPage() {
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const { data } = useQuery(FETCH_PRODUCTS)

    const onClickDelete = (event) =>{
        deleteProduct({
          variables:{productId:(event.target.id)},
          refetchQueries:[{query:FETCH_PRODUCTS}]
        })
      }


    return(
        <>
        {data?.fetchProducts.map((el) => (
          <Row key={el._id}>
            <Column><input type="checkbox"/></Column>
            <Column>{el.seller}</Column>
            <Column>{el.name}</Column>
            <Column>{el.detail}</Column>
            <Column>
              <button id={el._id} onClick={onClickDelete}>삭제</button>
            </Column>
          </Row> 
        ))}
      </>




    )
}


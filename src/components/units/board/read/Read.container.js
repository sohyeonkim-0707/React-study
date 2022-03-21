import ReadUI from './Read.presenter'
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client"
import {FETCH_BOARD} from './Read.queries'

export default function Read(){
  const router =useRouter()
  console.log(router) //라우터내용확인

  const { data } = useQuery(FETCH_BOARD,{
      variables:{number:Number(router.query.number)}
  })

  console.log(data) //데이터확인


  return(
      <ReadUI data ={data}/>
  )

}


import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"소현", title:"오미크론", contents:"방역"){
            _id
            number
            message
        }
    }
`

export default function QuizGraphqlApiPage(){
    const [data, setData] =useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async ()=>{
        const result = await callApi()
        console.log(result)
        setData(result.data.title)
    }

    return(
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!! </button>
        </div>

    )
}
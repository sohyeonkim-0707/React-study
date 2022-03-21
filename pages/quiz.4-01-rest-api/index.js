import axios from 'axios'


const QuizRestGetPage = () => {
    //state 불러온 값 보여줌
    //const [data, setData] =userState("")

    async function callRestApi(){ 
        //axios 요청하기
        const result = await axios.get("https://koreanjson.com/users ")
        console.log(result)
    }

    return(
        <div>
            <button onClick={callRestApi}> REST-API 요청하기 </button>
        </div>
    )

}
export default QuizRestGetPage



/* export default function  QuizRestGetPage() {
    //state 불러온 값 보여줌
    //const [data, setData] =userState("")

    async function callRestApi(){ 
        //axios 요청하기
        const result = await axios.get("https://koreanjson.com/users ")
        console.log(result)
    }

    return(
        <div>
            <button onClick={callRestApi}> REST-API 요청하기 </button>
        </div>
    )
} */

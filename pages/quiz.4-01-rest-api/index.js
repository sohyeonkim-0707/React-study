// Rest API 이용해서 데이터를 요청하고 받아오기
import axios from "axios";

const QuizRestGetPage = () => {
  async function callRestApi() {
    //await 와 axios 요청하기
    const result = await axios.get("https://koreanjson.com/users ");
    console.log(result);
  }

  return (
    <div>
      <button onClick={callRestApi}> REST-API 요청하기 </button>
    </div>
  );
};
export default QuizRestGetPage;

import styled from '@emotion/styled'

export default function AAAPage( ) {

      //자바스크립트 쓰는 곳 

      const Container = styled.div`
      background-color: beige;
      width:1200px;
      height: 2000px;
      border: 1px solid black;
      `

      const Rectangle=styled.div`
            width: 640px;
            height: 1138px;
            border:1px solid black;
            display: flex;
            flex-direction: column;

          `

          const Header=styled.div`
          width:600px;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border: 1px solid red;
          `

          const Title = styled.span`
          font-size: 40px;
          font-weight: bold;
          `

          const Profile = styled.div`
          width: 60px;
          height: 60px;
          background-color: gray;
          border-radius:50%
          `

          const Name = styled.span`
          font-size: 24px;
          font-weight: bold;
          `
          const Arrow =styled.span`
          color:gray;
          `

          const Banner = styled.div`
          border:1px solid blue;
          height:50px;
          width: 100%;

          `
          const Banner__title = styled.span`
          width: 64px;
            height: 32px;
            margin: 52px 20.5px 8px 50px;
            font-size: 30px;
            font-weight: bold;
            color: #cacaca;
          `

          const Middle = styled.div`
            width:540;
            height:700px;
            border:1px solid red;
          `
          const Question = styled.div`
            width:100%;
            height:100px;
            border:1px solid blue;
            p{
                  width: 490px;
                  height: 20px;
                  margin: 0 0 14px;
                  font-family: SpoqaHanSans;
                  font-size: 18px;
                  font-weight: normal;
                  color: #adadad;
            }

            div{
                  width: 490px;
                  height: 26px;
                  margin: 14px 0 0;
                  font-size: 24px;
                  font-weight: normal;
            }
          `

          const Bottom = styled.div`
            width:600px;
            height:96px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-left:15px;
            align-items: center;

            div{
                  width:60px;
                  height:60px;
                  background-color:orange;
            }

          `

      return (
            <Rectangle>
                  <Header>
                        <Title >마이</Title>
                        <Profile></Profile>
                        <Name>임정아 <Arrow>&gt;</Arrow> </Name>
                  </Header>

                  <Banner>
                        <Banner__title>공지사항</Banner__title>
                        <Banner__title>이벤트</Banner__title>
                        <Banner__title>FAQ</Banner__title>
                        <Banner__title>Q&A</Banner__title>
                  </Banner>

                  <Middle>
                        <Question>
                              <p>Q. 01</p>
                              <div>리뷰 작성은 어떻게 하나요?</div>
                        </Question>
                        <Question>
                              <p>Q. 02</p>
                              <div>리뷰 수정/삭제는 어떻게 하나요?</div>
                        </Question>
                        <Question>
                              <p>Q. 03</p>
                              <div>리뷰 작성은 어떻게 하나요?</div>
                        </Question>
                        <Question>
                              <p>Q. 04</p>
                              <div>아이디/비밀번호를 잃어버렸어요.</div>
                        </Question>
                        <Question>
                              <p>Q. 05</p>
                              <div>출발지 설정은 어떻게 하나요?</div>
                        </Question>
                        <Question>
                              <p>Q. 06</p>
                              <div>비밀번호를 변경하고 싶어요.</div>
                        </Question>
                  </Middle>

                  <Bottom>
                        
                        <div>홈</div>
                        <div>잇츠로드</div>
                        <div>마이찜</div>
                        <div></div>
                  </Bottom>



            </Rectangle>
      )
}
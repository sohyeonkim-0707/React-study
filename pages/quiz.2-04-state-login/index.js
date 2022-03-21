//01. 회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
//(이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
//02. 각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
//03. 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
// 조건1) 이메일에 @가 없으면 에러입니다.
// 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
// 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
//04. 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.

import {useState} from 'react'

export default function SignupStatePage() {

      const [email, setEmail] = useState(' ')
      const [emailError, setEmailError] = useState(' ')
      const [pwd1, setPwd1] = useState(' ')
      const [pwd2, setPwd2] = useState(' ')
      const [pwdError, setPwdError] = useState(' ')
      

      function onChangeEmail(event){
            const value = event.target.value
            setEmail(value)
      }

      function onChangePwd1(event){
            const value = event.target.value
            setPwd1(value)
      }

      function onChangePwd2(event){
            const value = event.target.value
            setPwd2(value)
      }

      function GoJoin() {

            if(email.includes("@") === false){
                  setEmailError("이메일이 올바르지 않습니다!! @가 없음")
            }
            
            if(pwd1 !== pwd2){
                  setPwdError("비밀번호가 일치 하지 않습니다.")
            }

            if(email.includes("@") === true && pwd1 === pwd2){
                  alert("가입축하")
            }
      
      }

      
      return(
            <div>
                  
                  이메일: <input type="email" onChange={onChangeEmail}/>
                  <div style={{color:'red'}}>{emailError}</div>
            
                  비밀번호:<input type="password" onChange={onChangePwd1}/>
                  비밀번호 확인:<input type="password"onChange={onChangePwd2}/>
                  <div style={{color:'red'}}>{pwdError}</div>

                  <button onClick={GoJoin}>가입하기</button>
                  
            </div>
      )
}
import {useState} from 'react'



export default function  HelloPage() {

      const [Hello, setHello] =useState("안녕하세요");

      let SayHello = ( ) => {
            /* setHello("반갑습니다.") */
            document.getElementById(setHello("반갑습니다."))
      };
    


      return(
            <div>
                  <button onClick={SayHello} >{Hello}</button>
            </div>
      )
}


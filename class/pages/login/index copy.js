import { useState } from "react"


import {login} from "@emotion/styled/types/base"


export const login = styled.input`
    font-size: 11px;
    color: red;
`



export default function LoginPage() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [iderror, setIderror] = useState('')
    const [pwerror, setPwerror] = useState('')
    function aaa(event) {

        setId(event.target.value)
    }
    function bbb(event) {

        setPw(event.target.value)
    }
    function ccc() {
        if (id === '') {
            setIderror("!!아이디를 입력해 주세요!!")

        }
        if (pw === '') {
            setPwerror('!!비밀번호를 입력해 주세요!!')
        }
        if(id !== '' && pw !== ''){
            alert("로그인중입니다.")
        }
        

        //! 통신프로그램을 이용해서 
        //! id,password 백엔드컴퓨터에 API(만든 로그인함수)에 전송하기 


    }


    return (

        <div>
            <h1>로그인</h1>
            <div>아이디</div>
            <login onChange={aaa} type="test" placeholder={iderror}></login>
            <div>비밀번호</div>
            <login onChange={bbb} type="password" placeholder={pwerror}></login>
            <button onClick={ccc}>로그인하기</button>
        </div>

    )
}